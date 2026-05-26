export const useChefAvatar = (chef: string) => {
  return {
    name: chef.charAt(0).toUpperCase() + chef.slice(1),
    avatar: {
      src: `/img/chef/${chef}.jpg`,
      alt: chef.charAt(0).toUpperCase() + chef.slice(1),
      text: chef.charAt(0).toUpperCase(),
    },
  };
};
