import React, { useState } from "react";
import { searchUsersWithDetails } from "../services/githubService";
// fetchUserData

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResults([]);
    setTotalCount(0);
    setNextPage(1);

    if (!username.trim()) return;

    setLoading(true);
    try {
      const { users, totalCount: count, nextPage: np } = await searchUsersWithDetails({
        username,
        location,
        minRepos: minRepos ? Number(minRepos) : undefined,
        page: 1,
      });
      setResults(users);
      setTotalCount(count);
      setNextPage(np);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setLoading(true);
    setError("");
    try {
      const { users, nextPage: np } = await searchUsersWithDetails({
        username,
        location,
        minRepos: minRepos ? Number(minRepos) : undefined,
        page: nextPage,
      });
      setResults((prev) => [...prev, ...users]);
      setNextPage(np);
    } catch (err) {
      setError("Failed to load more results");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl p-8 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-6">GitHub User Search</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end place-items-center bg-white p-6 rounded-xl shadow-sm w-full">
        <div className="flex flex-col w-full">
          <label htmlFor="username" className="text-base font-semibold mb-2">Username</label>
          <input
            id="username"
            type="text"
            placeholder="octocat"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="h-12 px-4 text-lg rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="location" className="text-base font-semibold mb-2">Location</label>
          <input
            id="location"
            type="text"
            placeholder="San Francisco"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="h-12 px-4 text-lg rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="minRepos" className="text-base font-semibold mb-2">Min Repos</label>
          <input
            id="minRepos"
            type="number"
            min="0"
            placeholder="10"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="h-12 px-4 text-lg rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="h-12 md:h-12 px-6 text-lg bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-auto"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      <div className="mt-8 w-full">
        {error && <p className="text-red-600 mb-4" role="alert">{error}</p>}
        {totalCount > 0 && (
          <p className="text-base text-gray-600 mb-4">{totalCount} users found</p>
        )}
        <ul className="space-y-4 mx-auto max-w-2xl">
          {results.map((user) => (
            <li key={user.id} className="flex items-center gap-5 p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
              <img src={user.avatar_url} alt={user.login} className="h-14 w-14 rounded-full" />
              <div className="flex-1 text-left">
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-lg font-semibold hover:underline">{user.login}</a>
                <div className="text-sm text-gray-600 mt-1">
                  {user.location && <span className="mr-4">📍 {user.location}</span>}
                  {typeof user.public_repos === "number" && <span>📦 {user.public_repos} repos</span>}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {nextPage && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="h-12 px-6 text-lg rounded-md bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
