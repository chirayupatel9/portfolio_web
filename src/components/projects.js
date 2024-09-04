// Utility function to generate video/image paths dynamically
const generateVideoPaths = (basePath, count, extension = "jpg") => {
  return Array.from({ length: count }, (_, i) => ({
    source: `${basePath}${i + 1}.${extension}`,
  }));
};

// Optimized Projects Data Structure
const Projects = [
  {
    id: 1,
    title: "Medical BlockChain",
    description: "A project based on Blockchain technology.",
    video: generateVideoPaths("projects/MedicalBlockchain/mb", 8),
  },
  {
    id: 2,
    title: "Recommendation System",
    description:
      "A project based on Machine Learning and collaborative methods.",
    video: generateVideoPaths("projects/RecommendationSystem/rs", 5),
  },
  {
    id: 3,
    title: "Mask Detection",
    description: "A project based on Machine Learning and face recognition.",
    video: generateVideoPaths("projects/MaskDetection/md", 6, "jpg"),
  },
  {
    id: 4,
    title: "To-Do app",
    description: "A project based on JAVA.",
    video: generateVideoPaths("projects/ToDo/todo", 5),
  },
  {
    id: 5,
    title: "Calendar app",
    description: "A project based on python and Tkinter.",
    video: generateVideoPaths("projects/Calendar/cal", 2),
  },
  {
    id: 6,
    title: "Tic Tac Toe",
    description: "A project based on REACT.",
    video: generateVideoPaths("projects/TicTacToe/tt", 3),
  },
  {
    id: 7,
    title: "Chat app",
    description: "A project based on Android.",
    video: generateVideoPaths("projects/chatapp/ca", 7, "JPG"),
  },
];

export default Projects;
