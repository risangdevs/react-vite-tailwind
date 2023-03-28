export default function Title(){
    return <div className="sm:flex sm:items-center">
    <div className="sm:flex-auto">
      <h1 className="text-start font-semibold leading-6 text-gray-900">
        Users
      </h1>
      <p className="mt-2 text-sm text-gray-700 text-start">
        A list of all the users in your account including their name, title,
        email and role.
      </p>
    </div>
    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
      <button
        type="button"
        className="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add user
      </button>
    </div>
  </div>
}