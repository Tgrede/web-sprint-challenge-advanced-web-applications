import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {getColors as mockGetColors} from '../helpers/getColors'

jest.mock('../helpers/getColors')


const colors ={
  data:[
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff",
      },
      id: 1,
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc",
      },
      id: 2,
    },
    {
      color: "aqua",
      code: {
        hex: "#00ffff",
      },
      id: 3,
    },
  ]
}   



test("Renders BubblePage without errors", async () => {
  render(<BubblePage />)// Finish this test
});

test("Fetches data and renders the bubbles on mounting", async () => {
  
  const {rerender, debug} = render(<BubblePage />)// Finish this test
  const loading = screen.getByTestId('loading')
  expect(loading).toBeInTheDocument()

  mockGetColors.mockResolvedValueOnce(colors)

});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading