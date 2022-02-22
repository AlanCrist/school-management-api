import { InMemoryChallengeRepository } from "../../../tests/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../../tests/repositories/in-memory-students-repository";
import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { CreateChallengeSubmission } from "./create_challenge_submission";

describe('Create challenge submission use case', () => {
    it('should be able to create a new challenge submission', () => {
        const studentsRepository = new InMemoryStudentsRepository();
        const challengeRepository = new InMemoryChallengeRepository();
       
        const student = Student.create({
            name: 'Alien',
            email: 'alien@ufo.com',
        });

        const challenge = Challenge.create({
            title: 'Challenge 1',
            instructionsUrl: 'http://example.com',
        });

        studentsRepository.items.push(student);
        challengeRepository.items.push(challenge);

        const sut = new CreateChallengeSubmission(challengeRepository, studentsRepository);

        const response = sut.execute({
            studentId: student.id,
            challengeId: challenge.id,
        });

        expect(response).toBeTruthy();
    });
});