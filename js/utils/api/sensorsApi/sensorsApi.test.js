import { retrieveSensorsData } from "./index";
import { data } from "../../../../data/mock-homepage-data";

describe("sesorsApi Unit Test Suites", () => {
    it("should return the mocked data", () => {
        expect(retrieveSensorsData()).toBe(data.facades)
    })
})