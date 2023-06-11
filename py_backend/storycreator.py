from fpdf import FPDF

class Storybook(FPDF):
    def __init__(self, name):
        super().__init__()
        self.name = name

        # Set up the page
        self.add_page()
        self.set_margins(20, 20, 20)

        # Set the font
        self.set_font("Arial", size=14)

        # Set the title
        self.set_title(self.name)

        # Add the cover page
        self.add_cover()

    def add_cover(self):
        # Add the cover image
        self.image("coverpage.jpg", x=0, y=0, w=self.w, h=self.h)

        # Add the title
        self.set_xy(0, 150)
        self.set_font("Arial", size=30)
        self.cell(0, 0, self.name, align="C")

    def add_toc(self, lis):
        # Add the table of contents title
        self.add_page()
        self.add_chapter("")
        self.add_paragraph(lis[0])
        self.add_page()
        self.image(lis[1], x=0, y=0, w=self.w, h=self.h)

    def add_chapter(self, title):
        # Add the chapter title
        self.set_font("Arial", size=24)
        self.cell(0, 20, title, ln=1)

    def add_paragraph(self, text):
        # Add the paragraph text
        self.set_font("Arial", size=14)
        self.multi_cell(0, 10, text)

        # Add a line break
        self.ln()