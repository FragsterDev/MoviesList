import NavButton from "./buttons/NavButton";
import UserButton from "./UserProfileButton";

function NavBar() {
  return (
    <div className="py-4">
      {/* Outer container with max width and vertical padding */}
      <div className="flex justify-between items-center max-w-[1200px] mx-auto">
        {/* Logo / Brand Name */}
        <p className="text-2xl">Movies List</p>

        {/* Right section: Navigation buttons + User */}
        <div className="flex justify-between items-center gap-20">
          {/* Navigation Buttons */}
          <div className="flex gap-[50px] px-6 items-center">
            <NavButton to="#" onClick={() => {}} className="">
              <p>Genre</p>
            </NavButton>
            <NavButton to="#" onClick={() => {}} className="">
              <p>Movies</p>
            </NavButton>
            <NavButton to="#" onClick={() => {}} className="">
              <p>TV Shows</p>
            </NavButton>
          </div>

          {/* User Profile Button */}
          <UserButton />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
