import React from 'react'

const About = () => {
  return (
    <div className="h-full flex md:items-center md:justify-center background-color">
      <section className=" text-center py-5 md:w-2/5 bg-white md:rounded-xl shadow-2xl">
        <h1 className="text-xl font-bold">🎮 Head & Tail Game</h1>
        <p>
          A simple web-based game built with React that allows users to simulate
          the classic coin toss game of Heads (H) and Tails (T) using an
          interactive UI.
        </p>

        <br />

        <h1 className="text-xl font-bold">🔍 Game Objective</h1>
        <p>
          The goal is to select either H or T from a dropdown, submit it, and
          visualize how the sequence builds over time. Each selection stacks
          vertically below the corresponding column — creating separate tracks
          for each unique sequence.
        </p>
      </section>
    </div>
  )
}

export default About