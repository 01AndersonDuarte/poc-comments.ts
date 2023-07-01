export function notFoundError(element: string) {
  return {
    type: "NotFoundError",
    message: `${element ? element : "Isso"} não foi encontrado`
  }
}