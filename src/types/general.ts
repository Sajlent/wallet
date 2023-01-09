interface IExpense {
    cost: string;
    category: string;
    month: string;
    name: string;
    id: string;
};

export interface IExpenses {
    expenses: IExpense[];
};

export interface IAppState {
    availableMonths: Months;
    availableCategories: Categories;
    options: IOptions;
};

interface IOptions {
    category: string | null;
    sorting: string | null;
}

export interface IOptionsPayload {
    optionName: keyof IOptions;
    optionValue: string;
}

export type Months = string[];
export type Categories = string[];