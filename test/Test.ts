import assert from "assert";
import { 
  TestHelpers,
  BASECOLORS_Approval
} from "generated";
const { MockDb, BASECOLORS } = TestHelpers;

describe("BASECOLORS contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for BASECOLORS contract Approval event
  const event = BASECOLORS.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("BASECOLORS_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await BASECOLORS.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualBASECOLORSApproval = mockDbUpdated.entities.BASECOLORS_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedBASECOLORSApproval: BASECOLORS_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      approved: event.params.approved,
      tokenId: event.params.tokenId,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualBASECOLORSApproval, expectedBASECOLORSApproval, "Actual BASECOLORSApproval should be the same as the expectedBASECOLORSApproval");
  });
});
