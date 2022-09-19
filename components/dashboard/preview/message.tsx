export default function Message({
  message,
  by,
}: {
  message: string;
  by: "user" | "bot";
}) {
  // Todo message , type , component to render
  return (
    <div
      className={`bg-blue-600 text-white rounded-t-lg rounded-r-lg max-w-[80%] my-4 mx-2 p-2 shadow-lg ${
        by === "user" ? "float-right" : "float-left"
      }`}
    >
      <div>{message}</div>
    </div>
  );
}
