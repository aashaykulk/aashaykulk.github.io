// app/components/ProfileImage.tsx
export default function ProfileImage() {
  return (
    <div className="flex justify-center">
      <img
        src="/pfp.png" // Place your profile image in the public directory
        alt="Profile Image"
        className="square-full w-20 h-20"
      />
    </div>
  );
}

