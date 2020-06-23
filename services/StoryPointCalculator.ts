import { StoryPointDetail } from "./StoryPointOptions"

type StoryPointSummary = {
    solutionEffortOption?: StoryPointDetail,
    testingOption?: StoryPointDetail,
    riskOption?: StoryPointDetail
}

const Fib = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

function Calculate(summary: StoryPointSummary): number {
    let result = 0

    if (summary.solutionEffortOption) {
        result = summary.solutionEffortOption.value
    }

    if (summary.testingOption) {
        let i = Fib.findIndex(a => a == result)
        if (i >= 0) {
            result = Fib[i + summary.testingOption.modifier]
        }
    }

    if (summary.riskOption) {
        let i = Fib.findIndex(a => a == result)
        if (i >= 0) {
            result = Fib[i + summary.riskOption.modifier]
        }
    }

    return result
}

export default Calculate