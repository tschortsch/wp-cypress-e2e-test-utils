export const getSelectByLabel = (label) => {
    return cy.xpath(`//label[contains(@class,"components-input-control__label") and contains(text(),"${label}")]/parent::div/following-sibling::div/select[contains(@class, "components-select-control__input")]`);
};
