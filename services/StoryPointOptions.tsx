export type StoryPointDetail = {
    id: StoryPointOptionID,
    value: number,
    modifier: number,
    category: StoryPointOptionCategory,
    description: React.ReactElement
}

export enum StoryPointOptionID {
    Brief1,
    Brief2,
    Brief3,
    Brief5,
    Brief8,
    Brief13,
    Solution1,
    Solution2,
    Solution3,
    Solution5,
    Solution8,
    Solution13,
    Effort1,
    Effort2,
    Effort3,
    Effort5,
    Effort8,
    Effort13,
    TestingBaseline,
    TestingPlus1,
    TestingPlus2,
    RiskBaseline,
    RiskPlus1,
    RiskPlus2,
}

export enum StoryPointOptionCategory {
    Brief = "Brief",
    Solution = "Solution",
    Effort = "Effort",
    Testing = "Testing",
    Risk = "Risk"
}

export class StoryPointBriefOptions {
    static Brief1: StoryPointDetail = {
        id: StoryPointOptionID.Brief1,
        value: 1,
        modifier: 0,
        category: StoryPointOptionCategory.Brief,
        description: <span><strong>Insignificant </strong>, one line change; typo</span>
    }
    static Brief2: StoryPointDetail = {
        id: StoryPointOptionID.Brief2,
        value: 2,
        modifier: 0,
        category: StoryPointOptionCategory.Brief,
        description: <span><strong>Minor</strong> change; configuration updates</span>
    }
    static Brief3: StoryPointDetail = {
        id: StoryPointOptionID.Brief3,
        value: 3,
        modifier: 0,
        category: StoryPointOptionCategory.Brief,
        description: <span><strong>Small</strong>, scoped feature; requires <strong>insignificant</strong> research or cross-team coordination</span>
    }
    static Brief5: StoryPointDetail = {
        id: StoryPointOptionID.Brief5,
        value: 5,
        modifier: 0,
        category: StoryPointOptionCategory.Brief,
        description: <span><strong>Complex</strong> feature; requires <strong>little</strong> research or cross-team coordination</span>
    }
    static Brief8: StoryPointDetail = {
        id: StoryPointOptionID.Brief8,
        value: 8,
        modifier: 0,
        category: StoryPointOptionCategory.Brief,
        description: <span><strong>Large</strong>, complex feature; requires <strong>some</strong> research or cross-team coordination</span>
    }
    static Brief13: StoryPointDetail = {
        id: StoryPointOptionID.Brief13,
        value: 13,
        modifier: 0,
        category: StoryPointOptionCategory.Brief,
        description: <span><strong>Very large</strong>, complex feature; requires <strong>significant</strong> research or cross-team coordination</span>
    }
}

export class StoryPointSolutionOptions {
    static Solution1: StoryPointDetail = {
        id: StoryPointOptionID.Solution1,
        value: 1,
        modifier: 0,
        category: StoryPointOptionCategory.Solution,
        description: <span>Obvious; <strong>zero</strong> unknowns</span>
    }
    static Solution2: StoryPointDetail = {
        id: StoryPointOptionID.Solution2,
        value: 2,
        modifier: 0,
        category: StoryPointOptionCategory.Solution,
        description: <span>Known; <strong>little to zero</strong> unknowns</span>
    }
    static Solution3: StoryPointDetail = {
        id: StoryPointOptionID.Solution3,
        value: 3,
        modifier: 0,
        category: StoryPointOptionCategory.Solution,
        description: <span>Generally known; <strong>few</strong> unknowns</span>
    }
    static Solution5: StoryPointDetail = {
        id: StoryPointOptionID.Solution5,
        value: 5,
        modifier: 0,
        category: StoryPointOptionCategory.Solution,
        description: <span>Have an idea; <strong>research limited</strong> to known unknowns</span>
    }
    static Solution8: StoryPointDetail = {
        id: StoryPointOptionID.Solution8,
        value: 8,
        modifier: 0,
        category: StoryPointOptionCategory.Solution,
        description: <span>Concept and the goals <strong>understood</strong>; solution requires <strong>some research</strong> that can only be done as part of the work</span>
    }
    static Solution13: StoryPointDetail = {
        id: StoryPointOptionID.Solution13,
        value: 13,
        modifier: 0,
        category: StoryPointOptionCategory.Solution,
        description: <span>Concept and the goals <strong>understood</strong>; solution requires <strong>significant research</strong> that can only be done as part of the work</span>
    }
}

export class StoryPointEffortOptions {
    static Effort1: StoryPointDetail = {
        id: StoryPointOptionID.Effort1,
        value: 1,
        modifier: 0,
        category: StoryPointOptionCategory.Effort,
        description: <span><strong>Simplistic</strong>; I could do many of these in a day</span>
    }
    static Effort2: StoryPointDetail = {
        id: StoryPointOptionID.Effort2,
        value: 2,
        modifier: 0,
        category: StoryPointOptionCategory.Effort,
        description: <span>Will have to <strong>focus</strong>, requires meaningful <strong>code review and tests</strong>, needs <strong>one</strong> session of concentration</span>
    }
    static Effort3: StoryPointDetail = {
        id: StoryPointOptionID.Effort3,
        value: 3,
        modifier: 0,
        category: StoryPointOptionCategory.Effort,
        description: <span>Will have to <strong>focus</strong>, requires meaningful <strong>code review and tests</strong>, needs <strong>one</strong> session of concentration</span>
    }
    static Effort5: StoryPointDetail = {
        id: StoryPointOptionID.Effort5,
        value: 5,
        modifier: 0,
        category: StoryPointOptionCategory.Effort,
        description: <span>Complexity or amount of work to be done requires a <strong>couple</strong> sessions of concentration</span>
    }
    static Effort8: StoryPointDetail = {
        id: StoryPointOptionID.Effort8,
        value: 8,
        modifier: 0,
        category: StoryPointOptionCategory.Effort,
        description: <span>Complexity or amount of work to be done requires a <strong>few</strong> sessions of concentration</span>
    }
    static Effort13: StoryPointDetail = {
        id: StoryPointOptionID.Effort13,
        value: 13,
        modifier: 0,
        category: StoryPointOptionCategory.Effort,
        description: <span>Complexity or amount of work to be done requires <strong>many</strong> of sessions of concentration</span>
    }
}

export class StoryPointTestingOptions {
    static TestingBaseline: StoryPointDetail = {
        id: StoryPointOptionID.TestingBaseline,
        value: 0,
        modifier: 0,
        category: StoryPointOptionCategory.Testing,
        description: <span><strong>Zero</strong> additional testing effort beyond standard practice</span>
    }
    static TestingPlus1: StoryPointDetail = {
        id: StoryPointOptionID.TestingPlus1,
        value: 0,
        modifier: 1,
        category: StoryPointOptionCategory.Testing,
        description: <span>Testing effort <strong>exceeds standard practice</strong> and is <strong>equal</strong> to the effort of the implementation</span>
    }
    static TestingPlus2: StoryPointDetail = {
        id: StoryPointOptionID.TestingPlus2,
        value: 0,
        modifier: 2,
        category: StoryPointOptionCategory.Testing,
        description: <span>Testing effort <strong>exceeds standard practice</strong> and is <strong>greater</strong> than the effort of the implementation</span>
    }
}

export class StoryPointRiskOptions {
    static RiskBaseline: StoryPointDetail = {
        id: StoryPointOptionID.RiskBaseline,
        value: 0,
        modifier: 0,
        category: StoryPointOptionCategory.Risk,
        description: <span>All risks <strong>owned</strong> outside of this ticket, <strong>accepted</strong>, <strong>resolved</strong>, or <strong>mitigated</strong>.</span>
    }
    static RiskPlus1: StoryPointDetail = {
        id: StoryPointOptionID.RiskPlus1,
        value: 0,
        modifier: 1,
        category: StoryPointOptionCategory.Risk,
        description: <span><strong>Low to moderate</strong> risk <strong>owned</strong> and <strong>accepted</strong> as part of this ticket</span>
    }
    static RiskPlus2: StoryPointDetail = {
        id: StoryPointOptionID.RiskPlus2,
        value: 0,
        modifier: 2,
        category: StoryPointOptionCategory.Risk,
        description: <span><strong>Moderate to high</strong> risk <strong>owned</strong> and <strong>accepted</strong> as part of this ticket</span>
    }
}
