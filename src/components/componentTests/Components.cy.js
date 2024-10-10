import AppBar from '../AppBar.vue'
import Autocomplete from '../Autocomplete.vue'
import Banner from '../Banner.vue'
import Breadcrumbs from '../Breadcrumbs.vue'
import Button from '../Button.vue'
import Card from '../Card.vue'
import Checkbox from '../Checkbox.vue'
import CheckboxGroup from '../CheckboxGroup.vue'
import ContentSectionTitle from '../ContentSectionTitle.vue'
import CustomInput from '../CustomInput.vue'
import DateInput from '../DateInput.vue'
import Divider from '../Divider.vue'
import ExpansionPanel from '../ExpansionPanel.vue'
import Footer from '../Footer.vue'
import Header from '../Header.vue'
import Icon from '../Icon.vue'
import NumberInput from '../NumberInput.vue'
import Pagination from '../Pagination.vue'
import PriceInput from '../PriceInput.vue'
import Radio from '../Radio.vue'
import RadioGroup from '../RadioGroup.vue'
import Select from '../Select.vue'
import ServiceLogo from '../ServiceLogo.vue'
import SimpleTable from '../SimpleTable.vue'
import Snackbar from '../Snackbar.vue'
import Subheader from '../Subheader.vue'
import Tab from '../Tab.vue'
import Table from '../Table.vue'
import Tabs from '../Tabs.vue'
import TextArea from '../TextArea.vue'
import TextInput from '../TextInput.vue'
import ValidationTooltip from '../ValidationTooltip.vue'

//Every test renders the component to ensure it loads on screen, it then carries out a specific
//interaction to ensure the component works, this differs depending on what the component is

describe('AppBar', () => {
    it('Renders, assign text to bar & assert text shows', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(AppBar, {
                slots: {
                    default: f.text,
                }
            })
            cy.get('#__cy_vue_root > div > div').should('have.text', f.text)
        })
    })
})

describe('Autocomplete', () => {
    it('Renders, enter text in input & assert autocomplete finds no results', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(Autocomplete)
            cy.get('#__cy_vue_root > div > div > input').type(f.text)
            cy.get('#__cy_vue_root > div > div > ul > li').contains(f.noResults)
        })
    })
})

describe('Banner', () => {
    it('Renders, assign text to bar & assert text shows', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(Banner, {
                slots: {
                    default: f.text,
                }
            })
            cy.get('#__cy_vue_root > div > div > div').should('have.text', f.text)
        })
    })
})

describe('Breadcrumbs', () => {
    it('Renders', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(Breadcrumbs)
        })
    })
})

describe('Button', () => {
    it('Renders, assign text to button & assert text shows', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(Button, {
                slots: {
                    default: f.text,
                }
            })
            cy.get('div button').should('have.text', f.text)
        })
    })
})

describe('Card', () => {
    it('Renders, assign text to card & assert text shows', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(Card, {
                slots: {
                    default: f.text,
                }
            })
            cy.get('#__cy_vue_root > div > div').should('have.text', f.text)
        })
    })
})

describe('Checkbox', () => {
    it('Renders, click checkbox & assert change has been called', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            const onChangeSpy = cy.spy().as('onChangeSpy')
            cy.mount(Checkbox, {
                props: {
                    onchange: onChangeSpy
                }
            })
            cy.get('#__cy_vue_root > div > div > label > input').click()
            cy.get('@onChangeSpy').should('have.been.called')
        })
    })
})

describe('CheckboxGroup', () => {
    it('Renders', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(CheckboxGroup)
        })
    })
})

describe('ContentSectionTitle', () => {
    it('Renders, assign text to content title & assert text shows', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(ContentSectionTitle, {
                slots: {
                    default: f.text,
                }
            })
            cy.get('#__cy_vue_root > div > div').should('have.text', f.text)
        })
    })
})

describe('CustomInput', () => {
    it('Renders, enters text into field & asserts text assigns to component', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(CustomInput)
            cy.get('#customInput').type(f.text)
            cy.get('#customInput').should('have.value', f.text)
        })
    })
})

describe('DateInput', () => {
    it('Renders, enters date into field & asserts values assign and format to component', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(DateInput)
            cy.get('#dateInput').type(f.dateInput)
            cy.get('#dateInput').should('have.value', f.date)
        })
    })
})

describe('Divider', () => {
    it('Renders', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(Divider)
        })
    })
})

describe('ExpansionPanel', () => {
    it('Renders, assign text to panel, click to expand panel & assert text shows', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(ExpansionPanel, {
                slots: {
                    default: f.text,
                }
            })
            cy.get('#expansion-control-undefined').click()
            cy.get('#content-undefined > div').should('have.text', f.text)
        })
    })
})

describe('Footer', () => {
    it('Renders, assign text to footer & assert text shows', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(Footer, {
                slots: {
                    default: f.text
                }
            })
            cy.get('#__cy_vue_root > div > footer').should('have.text', f.text)
        })
    })
})

describe('Header', () => {
    it('Renders', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(Header)
        })
    })
})

describe('Icon', () => {
    it('Renders', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(Icon)
        })
    })
})

describe('NumberInput', () => {
    it('Renders, enters number into field & asserts values assign and format to component', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(NumberInput)
            cy.get('#numberInput').type(f.valueInput)
            cy.get('#numberInput').should('have.value', f.value)
        })
    })
})

describe('Pagination', () => {
    it('Renders', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(Pagination)
        })
    })
})

describe('PriceInput', () => {
    it('Renders, enters number into field & asserts values assign and format to component', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(PriceInput)
            cy.get('#priceInput').type(f.valueInput)
            cy.get('#priceInput').should('have.value', f.value)
        })
    })
})

describe('Radio', () => {
    it('Renders, click radio button & assert change has been called', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            const onChangeSpy = cy.spy().as('onChangeSpy')
            cy.mount(Radio, {
                props: {
                    onChange: onChangeSpy
                }
            })
            cy.get('#undefined-').click()
            cy.get('@onChangeSpy').should('have.been.called')
        })
    })
})

describe('RadioGroup', () => {
    it('Renders', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(RadioGroup)
        })
    })
})

describe('Select', () => {
    it('Renders', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(Select)
        })
    })
})

describe('ServiceLogo', () => {
    it('Renders', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(ServiceLogo)
        })
    })
})

describe('SimpleTable', () => {
    it('Renders, assign text to table & assert text shows', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(SimpleTable, {
                slots: {
                    default: f.text
                }
            })
            cy.get('#__cy_vue_root > div > div > table').should('have.text', f.text)
        })
    })
})

describe('Snackbar', () => {
    it('Renders', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(Snackbar)
        })
    })
})

describe('Subheader', () => {
    it('Renders', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(Subheader)
        })
    })
})

describe('Tab', () => {
    it('Renders', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(Tab)
        })
    })
})

describe('Table', () => {
    it('Renders', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(Table)
        })
    })
})

describe('Tabs', () => {
    it('Renders', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(Tabs)
        })
    })
})

describe('TextArea', () => {
    it('Renders, enters text into field & asserts text assigns to component', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(TextArea)
            cy.get('#__cy_vue_root > div > div > textarea').type(f.text)
            cy.get('#__cy_vue_root > div > div > textarea').should('have.value', f.text)
        })
    })
})

describe('TextInput', () => {
    it('Renders, enters text into field & asserts text assigns to component', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(TextInput)
            cy.get('#textInput').type(f.text)
            cy.get('#textInput').should('have.value', f.text)
        })
    })
})

describe('ValidationTooltip', () => {
    it('Renders', () => {
        cy.fixture("ComponentFixtures").then((f) => {
            cy.mount(ValidationTooltip)
        })
    })
})