import React from 'react';

const Project2 = () => {
  return (
    <div className="mb-6 flex items-center bg-gray-100 rounded shadow-md p-4">
      <div className="w-1/2 p-6">
        <h1 className="text-4xl font-bold mb-4">Who Wants To Be a Millionaire</h1>
        <p className="mb-4">
          As recreation of the popular tv show, this interactive single-player game programmed in Python has a full set of 15 questions with options. 
          Throughout the game, players are able to use any of the three lifelines at any time. The program keeps score of the bank of a player when questions are answered
          correctly and a final game screen is presented with the total amount of money won. 
        </p>
        <ul className="list-disc ml-6">
          <li>Includes three lifelines: 50:50, phone-a-friend, and ask the audience</li>
          <li>UI constructed of ascii characters with text colouring imported from the replit IDE</li>
          <li>As soon as the player answers a question incorrectly, the game is over and a final screen displays the total money won.</li>
        </ul>
      </div>
      <div className="w-1/2 p-10">
        <video autoPlay loop muted className=" h-80 rounded-lg" poster="/webdemo-poster.jpg">
          <source src="/gamedemo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

  );
};

export default Project2;

