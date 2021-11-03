import React from 'react';
import { render, waitForElementToBeRemoved, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { BookReader } from './BookReader';

describe("BookReader", () => {
    test("should display an error when the pdf is not setted", async () => {
      render(<BookReader file=""/>);

      expect(screen.getByText('No PDF file specified.')).toBeInTheDocument();
    });
    test("should display an error when the pdf doesn't load", async () => {
      render(<BookReader file="https://ocw.uca.es/pluginfile.php/1491/mod_resource/content/1/El_principe_Maquiavelo.pdf"/>);

      await waitForElementToBeRemoved(() => screen.getByText('Loading PDF…'))
      expect(screen.getByText('Failed to load PDF file.')).toBeInTheDocument();
    });
});