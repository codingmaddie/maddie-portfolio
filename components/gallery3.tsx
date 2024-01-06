import React from 'react';

const Project3 = () => {
  return (
    <div className="mb-6 flex items-center border bg-gray-100 rounded border-white shadow-md p-4">
      <div className="w-1/2 p-10">
        <video autoPlay loop muted className="rounded-lg h-66" poster="/webdemo-poster.jpg">
          <source src="/hangmanvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-1/2 p-6">
        <h1 className="text-4xl font-bold mb-4">Hangman Game</h1>
        <p className="mb-4">
          Available in single player or multiplayer mode, users can choose the difficulty level of the secret word or input their own for the opponent to guess. Guesses are available in either single letters or answering the full word.
          The hangman UI is updated once every wrong guess is made. A list of wrong letter and word guesses are displayed above the display.
         
        </p>
        <ul className="list-disc ml-6">
          <li>Available in 2 game modes and 2 difficulty modes</li>
          <li>Ability to input user's own secret word, guess of character letters and full word guesses</li>
          <li>In multiplayer mode, player rounds alternate until players quit the game</li>
        </ul>
      </div>
    </div>
  );
};

export default Project3;