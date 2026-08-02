import type {UserProps} from "@nuxt/ui"

export const useChefAvatar = (chef: string): UserProps => {
  const name = chef.charAt(0).toUpperCase() + chef.slice(1)
  return {
    name: name,
    avatar: {
      src: `/img/chef/${chef}.jpg`,
      alt: name,
      text: name.charAt(0),
    },
  };
};
