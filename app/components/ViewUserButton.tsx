"use client";

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  return (
    <div
      onClick={() => {
        alert(`ini yang buat orang nomor: ${userId} `);
      }}
      className="cursor-pointer text-yellow-600"
    >
      liat orang
    </div>
  );
};

export default ViewUserButton;
