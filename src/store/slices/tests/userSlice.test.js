import { mockedState } from "../../../constants";
import reducer, { setUserData, removeUserData } from "../userSlice";

describe("authorsSlice", () => {
  it("should handle a user being updated", async () => {
    const previousState = [];

    expect(
      reducer(previousState, setUserData(mockedState.user))
    ).toMatchSnapshot();
  });

  it("should handle a user being removed", async () => {
    const previousState = { ...mockedState.user };

    expect(reducer(previousState, removeUserData())).toMatchSnapshot();
  });
});
