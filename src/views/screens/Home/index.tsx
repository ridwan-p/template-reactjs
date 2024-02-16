import { useState } from 'react';
import { Accordion, Alert, Collapse, Container } from '../../../core/components';
import { ToggleParamsAccordion } from '../../../core/components/interfaces';

export const Home = () => {
  const [isOpenCollapse, setIsOpenCollapse] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number[]>([]);

  const handleToggle = ({ isOpen, key }: ToggleParamsAccordion) => {
    if (isOpen) {
      openAccordion.push(key);
    } else {
      const index = openAccordion.findIndex(item => item === key)
      delete openAccordion[index];
    }
    setOpenAccordion([...openAccordion])
  }
  return (
    <Container>
      <Accordion
        open={openAccordion}
        onToggle={handleToggle}
        items={[
          {
            header: 'Item 1',
            content: 'This is the first item\'s accordion body.',
          },
          {
            header: 'Item 2',
            content: 'This is the second item\'s accordion body.'
          },
          {
            header: 'Item 3',
            content: 'This is the third item\'s accordion body.'
          }
        ]}
      />
      <Alert color='primary'>A simple light alert—check it out!</Alert>
      <Alert color='secondary'>A simple light alert—check it out!</Alert>
      <Alert color='success' isDismissible>A simple light alert—check it out!</Alert>
      <Alert color='warning'>A simple light alert—check it out!</Alert>
      <Alert color='info'>A simple light alert—check it out!</Alert>
      <Alert color='danger'>A simple light alert—check it out!</Alert>
      <Alert color='dark'>A simple light alert—check it out!</Alert>
      <Alert color='light'>A simple light alert—check it out!</Alert>
      <Alert color='dark' isDismissible>A simple light alert—check it out!</Alert>

      <Collapse isOpen={isOpenCollapse} >
        <div className="card" style={{ width: 300 }}>
          <div className="card-body">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </Collapse>
      <button onClick={() => { setIsOpenCollapse(!isOpenCollapse) }}>Click</button>
    </Container>
  )
}
export default Home