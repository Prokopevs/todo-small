import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import "@testing-library/jest-dom"
import * as reactHooks from "../../hooks"
import { store } from "../../store"
import Filters from "../Filters"

jest.mock("../../hooks")

const mockedDispatch = jest.spyOn(reactHooks, "useAppDispatch")

beforeEach(() => {
    mockedDispatch.mockClear()
})

describe("TaskPriority", () => {
    it("should create TaskSelect component", () => {
        mockedDispatch.mockReturnValue(jest.fn())

        const component = render(
            <Provider store={store}>
                <Filters />
            </Provider>
        )

        expect(component).toMatchSnapshot()
    })

    // it("EditMode click event", () => {
    //     mockedDispatch.mockReturnValue(jest.fn())

    //     render(
    //         <Provider store={store}>
    //             <MemoryRouter>
    //                 <TaskPriority task={TaskObj} priorityArray={priorityArray} />
    //             </MemoryRouter>
    //         </Provider>
    //     )

    //     const btn = screen.getByTestId("toggle-btn")
    //     fireEvent.click(btn)
    //     expect(mockedDispatch).toHaveBeenCalledTimes(1)
    // })
})
