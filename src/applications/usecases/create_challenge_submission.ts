import { Submission } from "../../domain/entities/submission";
import { ChallengesRepository } from "../repositories/ChallengesRepository";
import { StudentsRepository } from "../repositories/StudentsRepository";

type CreateChallengeSubmissionRequest = {
    studentId: string;
    challengeId: string;
}

export class CreateChallengeSubmission {

    constructor(
        private challengesRepository: ChallengesRepository,
        private studentsRepository: StudentsRepository,
    ) {}

    async execute({studentId, challengeId}: CreateChallengeSubmissionRequest) {

        const challenge = await this.challengesRepository.findById(challengeId);

        if(!challenge) {
            throw new Error('Challenge does not exists.');
        }

        const student = await this.studentsRepository.findById(studentId);

        if(!student) {
            throw new Error('Students does not exists.');
        }

        const submission = Submission.create({
            studentId,
            challengeId,
        });

        return submission;
    }
}