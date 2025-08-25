import { MapPinIcon, BookmarkIcon, UsersIcon, StarIcon, CalendarIcon } from "@heroicons/react/24/solid"

export default function CarSpecsCard() {
  return (
    <div className="h-full dark:bg-gray-900 flex flex-col dark:border-gray-700 rounded-lg w-full max-w-md">


      <div className="mt-3 space-y-4">
        {/* Location */}
        <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
          <MapPinIcon className="w-4 h-4 text-orange-500 mr-2" />
          <span>Satellite, Ahmedabad, Gujarat</span>
        </div>

        {/* Data Points */}
<div className="flex gap-3 overflow-x-auto scrollbar-hide">
  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm shadow-sm flex-shrink-0">
    <BookmarkIcon className="w-4 h-4" /> 152 Saves
  </div>
  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg- bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm shadow-sm flex-shrink-0">
    <CalendarIcon className="w-4 h-4" /> Estb. 1998
  </div>
  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm shadow-sm flex-shrink-0">
    <UsersIcon className="w-4 h-4" /> 100+ Employees
  </div>
  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm shadow-sm flex-shrink-0">
    <StarIcon className="w-4 h-4" /> 4.5 Rating
  </div>
</div>

      </div>
    </div>
  )
}
