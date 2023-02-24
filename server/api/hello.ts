export default defineEventHandler((event) => {
  console.log("On server");
  return { message: "Hello GET" };
});
