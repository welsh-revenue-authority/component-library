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

describe('AppBar', () => {
    it('Renders, assign text to bar & assert text shows', () => {
        cy.mount(AppBar, {
            slots: {
                default: 'Hello there!',
            }
        })
        cy.get('#__cy_vue_root > div > div').should('have.text', 'Hello there!')
    })
})

describe('Autocomplete', () => {
    it('Renders, enter text in input & assert autocomplete finds no results', () => {
        cy.mount(Autocomplete)
        cy.get('#__cy_vue_root > div > div > input').type('Hello there!')
        cy.get('#__cy_vue_root > div > div > ul > li').contains('No results found')
    })
})

describe('Banner', () => {
    it('Renders, assign text to bar & assert text shows', () => {
        cy.mount(Banner, {
            slots: {
                default: 'Hello there!',
            }
        })
        cy.get('#__cy_vue_root > div > div > div').should('have.text', 'Hello there!')
    })
})

describe('Breadcrumbs', () => {
    it('Renders', () => {
        cy.mount(Breadcrumbs)
    })
})

describe('Button', () => {
    it('Renders, assign text to button & assert text shows', () => {
        cy.mount(Button, {
            slots: {
                default: 'Hello there!',
            }
        })
        cy.get('div button').should('have.text', 'Hello there!')
    })
})

describe('Card', () => {
    it('Renders, assign text to card & assert text shows', () => {
        cy.mount(Card, {
            slots: {
                default: 'Hello there!',
            }
        })
        cy.get('#__cy_vue_root > div > div').should('have.text', 'Hello there!')
    })
})

describe('Checkbox', () => {
    it('Renders, click checkbox & assert change has been called', () => {
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

describe('CheckboxGroup', () => {
    it('Renders', () => {
        cy.mount(CheckboxGroup)
    })
})

describe('ContentSectionTitle', () => {
    it('Renders, assign text to content title & assert text shows', () => {
        cy.mount(ContentSectionTitle, {
            slots: {
                default: 'Hello there!',
            }
        })
        cy.get('#__cy_vue_root > div > div').should('have.text', 'Hello there!')
    })
})

describe('CustomInput', () => {
    it('Renders, enters text into field & asserts text assigns to component', () => {
        cy.mount(CustomInput)
        cy.get('#customInput').type('Hello there!')
        cy.get('#customInput').should('have.value', 'Hello there!')
    })
})

describe('DateInput', () => {
    it('Renders, enters date into field & asserts values assign and format to component', () => {
        cy.mount(DateInput)
        cy.get('#dateInput').type('01012000')
        cy.get('#dateInput').should('have.value', '01/01/2000')
    })
})

describe('Divider', () => {
    it('Renders', () => {
        cy.mount(Divider)
    })
})

describe('ExpansionPanel', () => {
    it('Renders, assign text to panel, click to expand panel & assert text shows', () => {
        cy.mount(ExpansionPanel, {
            slots: {
                default: 'Hello there!',
            }
        })
        cy.get('#expansion-control-undefined').click()
        cy.get('#content-undefined > div').should('have.text', 'Hello there!')
    })
})

describe('Footer', () => {
    it('Renders, assign text to footer & assert text shows', () => {
        cy.mount(Footer, {
            slots: {
                default: 'Hello there!'
            }
        })
        cy.get('#__cy_vue_root > div > footer').should('have.text', 'Hello there!')
    })
})

describe('Header', () => {
    it('Renders', () => {
        cy.mount(Header)
    })
})

describe('Icon', () => {
    it('Renders', () => {
        cy.mount(Icon)
    })
})

describe('NumberInput', () => {
    it('Renders, enters number into field & asserts values assign and format to component', () => {
        cy.mount(NumberInput)
        cy.get('#numberInput').type('1000000')
        cy.get('#numberInput').should('have.value', '1,000,000')
    })
})

describe('Pagination', () => {
    it('Renders', () => {
        cy.mount(Pagination)
    })
})

describe('PriceInput', () => {
    it('Renders, enters number into field & asserts values assign and format to component', () => {
        cy.mount(PriceInput)
        cy.get('#priceInput').type('1000000')
        cy.get('#priceInput').should('have.value', '1,000,000')
    })
})

describe('Radio', () => {
    it('Renders, click radio button & assert change has been called', () => {
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

describe('RadioGroup', () => {
    it('Renders', () => {
        cy.mount(RadioGroup)
    })
})

describe('Select', () => {
    it('Renders', () => {
        cy.mount(Select)
    })
})

describe('ServiceLogo', () => {
    it('Renders', () => {
        cy.mount(ServiceLogo)
    })
})

describe('SimpleTable', () => {
    it('Renders, assign text to table & assert text shows', () => {
        cy.mount(SimpleTable, {
            slots: {
                default: 'Hello there!'
            }
        })
        cy.get('#__cy_vue_root > div > div > table').should('have.text', 'Hello there!')
    })
})

describe('Snackbar', () => {
    it('Renders', () => {
        cy.mount(Snackbar)
    })
})

describe('Subheader', () => {
    it('Renders', () => {
        cy.mount(Subheader)
    })
})

describe('Tab', () => {
    it('Renders', () => {
        cy.mount(Tab)
    })
})

describe('Table', () => {
    it('Renders', () => {
        cy.mount(Table)
    })
})

describe('Tabs', () => {
    it('Renders', () => {
        cy.mount(Tabs)
    })
})

describe('TextArea', () => {
    it('Renders, enters text into field & asserts text assigns to component', () => {
        cy.mount(TextArea)
        cy.get('#__cy_vue_root > div > div > textarea').type('Hello there!')
        cy.get('#__cy_vue_root > div > div > textarea').should('have.value', 'Hello there!')
    })
})

describe('TextInput', () => {
    it('Renders, enters text into field & asserts text assigns to component', () => {
        cy.mount(TextInput)
        cy.get('#textInput').type('Hello there!')
        cy.get('#textInput').should('have.value', 'Hello there!')
    })
})

describe('ValidationTooltip', () => {
    it('Renders', () => {
        cy.mount(ValidationTooltip)
    })
})