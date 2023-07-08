export function notFoundError(element: string) {
  return {
    type: "NotFoundError",
    message: `${element ? element : "Isso"} não foi encontrado`
  }
}

export function conflitError(element: string) {
  return {
    type: "conflitError",
    message: `${element}`
  }
}

export function unauthorizedError(element?: string) {
  return {
    type: "unauthorizedError",
    message: `${element ? element : "Não autorizado"}`
  };
}