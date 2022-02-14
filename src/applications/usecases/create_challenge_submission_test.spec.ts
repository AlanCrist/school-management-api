import { CreateChallengeSubmission } from "./create_challenge_submission";

describe('Create challenge submission use case', () => {
    it('should be able to create a new challenge submission', () => {
        const sut = new CreateChallengeSubmission();

        const response = sut.execute({
            studentId: 'fakeid',
            challengeId: 'fakeid',
        });

        expect(response).toBeTruthy();
    });
});