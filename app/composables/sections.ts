export const useSection = async (page: string, section: string) => {
  return useAsyncData(`${page}-${section}`, () =>
    queryCollection("section")
      .path(["", "section", page, section].join("/"))
      .first(),
  );
};
