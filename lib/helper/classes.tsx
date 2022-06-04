function classes(...names: (string | undefined)[]) {
  return names.filter((t) => t).join(" ");
}

export default classes;
