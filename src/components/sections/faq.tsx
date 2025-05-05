import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background flex flex-col items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Find answers to common questions about our 3D printing services.
          </p>
        </div>
        <div className="mx-auto max-w-3xl mt-8 md:mt-12">
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
      </div>
    </section>
  );
};

export default FaQ;
