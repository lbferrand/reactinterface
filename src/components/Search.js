import { BiCaretDown, BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="py-5">
      <div className="mt-1 relative rounded-md shadow-sw">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiSearch />
        </div>
        <input
          type="text"
          name="query"
          id="query"
          value=""
          className="pl-8 rounded-md focus:right-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300"
          placeholder="Search"
        ></input>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div>
            <button
              type="button"
              className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white"
            >
              Sort By <BiCaretDown className="ml-2" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
