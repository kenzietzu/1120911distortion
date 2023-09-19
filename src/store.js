import { createRef } from "react";

const state = {
  sections: 7,
  pages: 7,
  zoom: 1.2,
  paragraphs: [
    {
      offset: 1,
      factor: 2,
      header: "Streets of London",
      image:
        "https://images.unsplash.com/photo-1486133195063-ede2a1c5e061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      aspect: 1.5,
      text: "Two thousand pharmacologists and bio-chemists were subsidized. Six years later it was being produced commercially.",
    },
    {
      offset: 2,
      factor: 2,
      header: "Wading",
      image:
        "https://images.unsplash.com/photo-1518122043280-ffd6c8f273d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2333&q=80",
      aspect: 1.5,
      text: "The man who comes back through the Door in the Wall will never be quite the same as the man who went out. He will be wiser but less sure, happier but less self-satisfied, humbler in acknowledging his ignorance yet better equipped to understand the relationship of words to things, of systematic reasoning to the unfathomable mystery which it tries, forever vainly, to comprehend.",
    },
    {
      offset: 3,
      factor: 2,
      header: "Shoulders of Giants",
      image:
        "https://images.unsplash.com/photo-1519928649092-5d3ac45a5800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80",
      aspect: 1.5,
      text: "The substance can take you to heaven but it can also take you to hell. Or else to both, together or alternately. Or else (if you're lucky, or if you've made yourself ready) beyond either of them. And then beyond the beyond, back to where you started from — back to here, back to New Rotham sted, back to business as usual. Only now, of course, business as usual is completely different.",
    },
    {
      offset: 4,
      factor: 2,
      header: "Red Observation",
      image:
        "https://images.unsplash.com/photo-1519669417670-68775a50919c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80",
      aspect: 1.5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      offset: 5,
      factor: 2,
      header: "DJ turntable",
      image:
        "https://images.unsplash.com/photo-1485120750507-a3bf477acd63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      aspect: 1.5,
      text: "By cultivating the state of mind that makes it possible for the dazzling ecstatic insights to become permanent and habitual illuminations. By getting to know oneself to the point where one won’t be compelled by one’s unconscious to do all the ugly, absurd, self-stultifying things that one so often finds oneself doing.",
    },
    {
      offset: 6,
      factor: 1.5,
      header: "Swaggin’",
      image:
        "https://images.unsplash.com/photo-1535365229039-e36084b548f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      aspect: 1.5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumation and enlightenment.",
    },
  ],
  top: createRef(),
};

export default state;
