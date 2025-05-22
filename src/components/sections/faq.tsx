import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Heading from '../common/heading';
import SectionContainer from '../common/sectionContainer';

const faqData = [
  {
    question: 'How long does 3D printing usually take?',
    answer:
      "Printing time varies based on size, complexity, and material. Small items may take 2-6 hours, while larger or more detailed projects can take 12-48 hours. We'll provide a time estimate before starting your project.",
  },
  {
    question: 'What file formats do you accept for 3D printing?',
    answer:
      'We accept standard 3D printing formats including STL, OBJ, 3MF, and STEP files. If you have a different format, please contact us to check compatibility.',
  },
  {
    question: 'What materials can you print with?',
    answer:
      'We offer a variety of materials including PLA, ABS, PETG, TPU, Nylon, and resin. Each material has different properties suitable for various applications. Our team can help you select the best material for your specific needs.',
  },
  {
    question: 'Do you offer design services for 3D printing?',
    answer:
      "Yes, we provide design services for customers who don't have 3D models ready. Our designers can create custom models from scratch or modify existing designs to meet your specifications. Design services are priced separately from printing.",
  },
  {
    question: 'What is the maximum size object you can print?',
    answer:
      'Our standard printers can accommodate objects up to 250mm × 250mm × 300mm. For larger projects, we can either print in sections and assemble afterward, or use our large-format printers which can handle dimensions up to 400mm × 400mm × 450mm.',
  },
];

const FaQ = () => {
  return (
    <SectionContainer contentClassName="items-center ">
      {/* Heading */}
      <Heading
        pillText="FaQ"
        title="Frequently Asked "
        titleBold="Questions"
        description="Find answers to common questions about our 3D printing services."
        className="items-center text-center"
      />
      <div className="  mt-8 md:mt-12  md:min-w-3xl  max-w-3xl   ">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionContainer>
  );
};

export default FaQ;
