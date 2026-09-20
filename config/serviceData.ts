export type ServiceData = {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  documents: string[];
  timeline: string;
  faqs: { question: string; answer: string }[];
  benefits: { title: string; desc: string }[];
};

const serviceData: Record<string, ServiceData> = {
  /* ── STARTUP ── */
  'private-limited-company': {
    title: 'Private Limited Company Registration',
    tagline: 'Most preferred business structure for startups and SMEs in India',
    description: 'A Private Limited Company (Pvt Ltd) is the most popular business structure in India offering limited liability, ease of funding, and legal credibility. Register your company with MCA in just 7–10 working days.',
    highlights: ['Limited Liability Protection', 'Easy Fund Raising', 'Separate Legal Entity', 'Perpetual Existence', 'Tax Benefits', 'Credibility with Clients'],
    documents: ['PAN & Aadhaar of Directors', 'Passport-size Photographs', 'Address Proof (Bank Statement / Utility Bill)', 'Registered Office Proof (NOC + Electricity Bill)', 'Digital Signature Certificate (DSC)'],
    timeline: '7–10 working days',
    faqs: [
      { question: 'What is the minimum capital required?', answer: 'There is no minimum paid-up capital requirement for a Private Limited Company in India. You can start with as little as ₹1.' },
      { question: 'How many directors are required?', answer: 'A minimum of 2 directors and 2 shareholders are required. A director can also be a shareholder.' },
      { question: 'Is physical presence required?', answer: 'No. The entire process is done online via MCA21 portal. You do not need to visit any government office.' },
      { question: 'What is SPICe+ form?', answer: 'SPICe+ (Simplified Proforma for Incorporating Company Electronically) is the single-window MCA form used for company registration.' },
      { question: 'What annual compliances are mandatory?', answer: 'Annual ROC filings (AOC-4, MGT-7), Board meetings (minimum 4/year), Statutory Audit, GST returns, and Income Tax Return (ITR-6) are mandatory.' },
    ],
    benefits: [
      { title: 'Limited Liability', desc: 'Shareholders are only liable up to their share capital — personal assets are fully protected.' },
      { title: 'Easier Fund Raising', desc: 'VCs and banks prefer lending to Pvt Ltd companies due to structured ownership.' },
      { title: 'Tax Planning', desc: 'Corporate tax rates (22%) are lower than individual rates for profitable businesses.' },
    ],
  },

  'one-person-company': {
    title: 'One Person Company (OPC) Registration',
    tagline: 'Run a company solo with full legal protection',
    description: 'One Person Company (OPC) allows a single entrepreneur to enjoy the benefits of a Private Limited Company — limited liability and legal recognition — without needing a co-founder.',
    highlights: ['Single Owner Structure', 'Limited Liability', 'Separate Legal Entity', 'Easy Bank Loans', 'No Need for Co-Founder', 'Eligible for Govt Tenders'],
    documents: ['PAN & Aadhaar of Owner', 'Passport-size Photograph', 'Address Proof', 'Registered Office Proof (NOC + Electricity Bill)', 'Nominee Details'],
    timeline: '7–10 working days',
    faqs: [
      { question: 'Who can form an OPC?', answer: 'Only a natural Indian citizen and resident (residing in India for 182+ days in the previous financial year) can form an OPC.' },
      { question: 'What is a nominee in OPC?', answer: 'An OPC must nominate another person who will take over the company in case the sole member becomes incapacitated or dies.' },
      { question: 'Can an OPC convert to Pvt Ltd?', answer: 'Yes. An OPC must mandatorily convert to a Private Limited Company once its paid-up capital exceeds ₹50 lakh or turnover exceeds ₹2 crore.' },
    ],
    benefits: [
      { title: 'Solo Entrepreneurship', desc: 'No need for a partner. Run your business 100% independently with full legal protection.' },
      { title: 'Limited Liability', desc: 'Personal assets are protected from business debts and liabilities.' },
      { title: 'Government Recognition', desc: 'Eligible to apply for government tenders and contracts unlike sole proprietorships.' },
    ],
  },

  'llp-registration': {
    title: 'LLP Registration',
    tagline: 'The perfect blend of a partnership and a company',
    description: 'A Limited Liability Partnership (LLP) combines the flexibility of a partnership with the limited liability protection of a company. Ideal for professionals, consultants, and small businesses.',
    highlights: ['Flexible Management', 'Limited Liability', 'Lower Compliance', 'No Mandatory Audit (up to ₹40L turnover)', 'Easy Partner Addition/Removal', 'Perpetual Succession'],
    documents: ['PAN & Aadhaar of Partners', 'Passport-size Photographs', 'Address Proof of Partners', 'Registered Office Proof', 'LLP Agreement'],
    timeline: '10–14 working days',
    faqs: [
      { question: 'What is the minimum number of partners?', answer: 'An LLP requires a minimum of 2 designated partners, with no upper limit on the number of partners.' },
      { question: 'Is audit mandatory for LLP?', answer: 'Audit is mandatory only if turnover exceeds ₹40 lakh or capital contribution exceeds ₹25 lakh.' },
      { question: 'What is LLP Form 11?', answer: 'LLP Form 11 is the Annual Return that every LLP must file with MCA by 30th May each year.' },
    ],
    benefits: [
      { title: 'Low Compliance Cost', desc: 'Fewer mandatory filings vs a Pvt Ltd company — ideal for small professional firms.' },
      { title: 'Limited Liability', desc: 'Partners are not personally liable for the LLP\'s debts beyond their contribution.' },
      { title: 'Pass-through Taxation', desc: 'Profits are taxed in the hands of partners, avoiding double taxation.' },
    ],
  },

  'public-limited-company': {
    title: 'Public Limited Company Registration',
    tagline: 'Scale your business for public investment and stock market listing',
    description: 'A Public Limited Company can raise capital from the public through share offering and is eligible for listing on stock exchanges (BSE/NSE). Requires minimum 3 directors and 7 shareholders.',
    highlights: ['Public Fund Raising', 'Stock Market Eligible', 'High Credibility', 'Perpetual Existence', 'Minimum 3 Directors', 'Minimum 7 Shareholders'],
    documents: ['PAN & Aadhaar of all Directors', 'Address Proof of Directors', 'MOA & AOA Draft', 'Registered Office Proof', 'Director Consent Forms'],
    timeline: '15–20 working days',
    faqs: [
      { question: 'What is the minimum capital required?', answer: 'A minimum paid-up capital of ₹5 lakh is required for a Public Limited Company.' },
      { question: 'Can a Public Ltd Company do an IPO?', answer: 'Yes. After 3 years of operations and meeting SEBI requirements, a Public Limited Company can file for an IPO.' },
    ],
    benefits: [
      { title: 'Public Capital Raising', desc: 'Issue shares to the public and raise large amounts of capital for growth.' },
      { title: 'IPO Ready', desc: 'The first step for any company aspiring to list on BSE or NSE.' },
      { title: 'Maximum Credibility', desc: 'Public Limited Companies command highest trust from banks, investors, and customers.' },
    ],
  },

  'partnership-firm': {
    title: 'Partnership Firm Registration',
    tagline: 'Simple, cost-effective business structure for two or more individuals',
    description: 'A Partnership Firm is formed by two or more persons who agree to share business profits and losses. Registration under the Indian Partnership Act, 1932 provides legal recognition.',
    highlights: ['Easy to Form', 'Low Setup Cost', 'Flexible Management', 'Shared Resources', 'Simple Compliance', 'Suitable for Small Businesses'],
    documents: ['PAN & Aadhaar of Partners', 'Partnership Deed', 'Address Proof of all Partners', 'Registered Office Proof', 'Notarized Partnership Agreement'],
    timeline: '5–7 working days',
    faqs: [
      { question: 'Is partnership firm registration mandatory?', answer: 'No, it is optional but highly recommended. A registered firm can sue other parties in court, while an unregistered firm cannot.' },
      { question: 'What is a Partnership Deed?', answer: 'It is a legal agreement outlining profit sharing ratio, partner roles, capital contribution, and dispute resolution procedures.' },
    ],
    benefits: [
      { title: 'Low Formation Cost', desc: 'Minimal registration fees and no minimum capital requirement.' },
      { title: 'Direct Control', desc: 'Partners have equal say in business decisions unless the deed specifies otherwise.' },
      { title: 'Combined Resources', desc: 'Pool skills, capital, and networks of multiple individuals.' },
    ],
  },

  'sole-proprietorship': {
    title: 'Sole Proprietorship Registration',
    tagline: 'Quickest way to start a business in India',
    description: 'A Sole Proprietorship is the simplest business structure where one person owns and operates the business. Get GST registration, Shop Act license, and bank account to operate legally.',
    highlights: ['Easiest to Start', 'Full Control', 'Low Compliance', 'No Formal Registration Required', 'GST + Bank Account Setup', 'Ideal for Freelancers & Traders'],
    documents: ['PAN Card', 'Aadhaar Card', 'Bank Account Proof', 'Address Proof', 'GST Certificate (if applicable)'],
    timeline: '3–5 working days',
    faqs: [
      { question: 'Does a sole proprietorship need registration?', answer: 'There is no separate registration. However, you need GST registration (if turnover > ₹20L), Shop Act license, and a bank current account.' },
      { question: 'Is there limited liability protection?', answer: 'No. In a sole proprietorship, the owner is personally liable for all business debts.' },
    ],
    benefits: [
      { title: 'Simple Setup', desc: 'No complex legal procedures — ideal for local shops, freelancers, and service providers.' },
      { title: 'Full Profit Retention', desc: 'Keep 100% of business profits without sharing with partners.' },
      { title: 'Low Compliance', desc: 'Minimal statutory requirements compared to companies or LLPs.' },
    ],
  },

  'section-8-company': {
    title: 'Section 8 Company Registration',
    tagline: 'Register a Non-Profit Organization with government recognition',
    description: 'A Section 8 Company is formed for promoting commerce, art, science, sports, education, research, social welfare, religion, charity, or protection of environment. It enjoys tax exemptions under the Income Tax Act.',
    highlights: ['Non-Profit Organization', '80G & 12A Tax Exemption', 'CSR Fund Eligibility', 'Government Grants Eligible', 'No Minimum Capital', 'Foreign Donation (FCRA) Eligible'],
    documents: ['PAN & Aadhaar of Directors', 'MOA & AOA (specific objectives)', 'Address Proof', 'Registered Office Proof', 'Declaration by Directors'],
    timeline: '15–20 working days',
    faqs: [
      { question: 'Can Section 8 companies receive foreign donations?', answer: 'Yes, after obtaining FCRA (Foreign Contribution Regulation Act) registration from the Ministry of Home Affairs.' },
      { question: 'What is 80G and 12A registration?', answer: '12A gives income tax exemption to the NGO. 80G allows donors to claim deductions on their donations — making fundraising easier.' },
    ],
    benefits: [
      { title: 'Tax Exemption', desc: 'Income is exempt from tax under Section 12A of Income Tax Act.' },
      { title: 'CSR Funding', desc: 'Eligible to receive Corporate Social Responsibility (CSR) funds from companies.' },
      { title: 'Credibility', desc: 'Registered NGOs gain higher trust from donors, government, and international foundations.' },
    ],
  },

  'startup-india': {
    title: 'Startup India Registration (DPIIT Recognition)',
    tagline: 'Get government recognition and unlock tax benefits for your startup',
    description: 'DPIIT (Department for Promotion of Industry and Internal Trade) recognition allows eligible startups to avail tax exemptions, easier compliance, and access to government schemes under Startup India initiative.',
    highlights: ['3-Year Income Tax Exemption', 'Faster IP Registration', 'Self-Certification for Labour Laws', 'Government Tender Priority', 'Startup India Seed Fund', 'Easier Winding Up'],
    documents: ['Company/LLP Incorporation Certificate', 'PAN Card of Entity', 'Director Details', 'Brief Business Plan / Pitch Deck', 'Proof of Innovation / Scalability'],
    timeline: '3–7 working days (online)',
    faqs: [
      { question: 'Who qualifies for Startup India?', answer: 'An entity (Pvt Ltd, LLP, or Partnership) incorporated less than 10 years ago, with annual turnover not exceeding ₹100 crore, working towards innovation or scalability.' },
      { question: 'What is the 80IAC tax exemption?', answer: 'DPIIT-recognized startups can apply for Section 80IAC — providing 100% tax exemption on profits for 3 consecutive years out of the first 10 years.' },
    ],
    benefits: [
      { title: '3-Year Tax Holiday', desc: 'Complete exemption from income tax for 3 consecutive years under Section 80IAC.' },
      { title: 'Faster Patent Filing', desc: '80% rebate on patent filing fees and fast-track examination.' },
      { title: 'Seed Fund Access', desc: 'Eligible for Startup India Seed Fund Scheme (SISFS) for proof-of-concept and market entry.' },
    ],
  },

  'udyam-msme': {
    title: 'Udyam (MSME) Registration',
    tagline: 'Register your business as an MSME and unlock government benefits',
    description: 'Udyam Registration is the official MSME registration process on the Udyam portal. It provides access to collateral-free loans, government subsidies, priority sector lending, and protection against delayed payments.',
    highlights: ['Collateral-Free MSME Loans', 'Government Subsidies', 'Priority Sector Lending', 'Protection Under MSME Act', 'Tax & Power Tariff Concessions', 'TReDS Eligibility'],
    documents: ['Aadhaar of Business Owner', 'PAN of Business', 'Bank Account Details', 'NIC Code of Business Activity', 'GST Number (if applicable)'],
    timeline: '1–2 working days',
    faqs: [
      { question: 'What are Micro, Small, and Medium enterprises?', answer: 'Micro: Investment up to ₹1 crore & Turnover up to ₹5 crore. Small: ₹10 crore & ₹50 crore. Medium: ₹50 crore & ₹250 crore.' },
      { question: 'Is Udyam registration mandatory?', answer: 'It is not mandatory but highly beneficial. Banks prefer Udyam-registered businesses for MSME loans.' },
    ],
    benefits: [
      { title: 'Subsidized Loans', desc: 'Get collateral-free loans under CGTMSE scheme at lower interest rates.' },
      { title: 'Payment Protection', desc: 'MSME buyers must pay within 45 days — enforced under MSME Development Act.' },
      { title: 'Government Tenders', desc: 'MSME firms get exemption from Pay Earnest Money Deposit (EMD) in government tenders.' },
    ],
  },

  /* ── GST ── */
  'gst-registration': {
    title: 'GST Registration',
    tagline: 'Mandatory GST compliance for all eligible businesses in India',
    description: 'GST (Goods and Services Tax) registration is mandatory for businesses with annual turnover exceeding ₹40 lakh (goods) or ₹20 lakh (services). E-commerce sellers must register regardless of turnover.',
    highlights: ['GSTIN in 3–5 Working Days', 'Input Tax Credit (ITC)', 'Legal Invoicing', 'Inter-State Trade', 'E-Commerce Compliance', 'Government Contract Eligibility'],
    documents: ['PAN Card of Business/Owner', 'Aadhaar Card', 'Address Proof of Business', 'Electricity Bill / NOC of Premises', 'Bank Account Statement / Cancelled Cheque', 'Digital Signature (for companies)'],
    timeline: '3–5 working days',
    faqs: [
      { question: 'Who must register for GST mandatorily?', answer: 'E-commerce sellers, inter-state suppliers, reverse charge payees, and input service distributors must register regardless of turnover.' },
      { question: 'What is the GST Composition Scheme?', answer: 'Small businesses with turnover up to ₹1.5 crore can opt for Composition Scheme — pay a flat tax rate (1-5%) and file quarterly returns.' },
      { question: 'What is GSTIN?', answer: 'GSTIN is a unique 15-digit alphanumeric Goods and Services Tax Identification Number assigned to every registered taxpayer.' },
    ],
    benefits: [
      { title: 'Input Tax Credit', desc: 'Claim ITC on purchases to reduce your overall GST liability — major cash flow benefit.' },
      { title: 'Legal Invoicing', desc: 'Issue GST-compliant invoices required by corporate clients and government departments.' },
      { title: 'Business Expansion', desc: 'Sell across India legally without restrictions — GST registration enables interstate trade.' },
    ],
  },

  'gst-return': {
    title: 'GST Return Filing',
    tagline: 'Timely GST return filing to avoid penalties and maintain compliance',
    description: 'GST return filing includes GSTR-1 (sales), GSTR-3B (summary), and annual GSTR-9. Late filing attracts ₹50/day penalty (₹20/day for Nil returns) plus 18% interest on unpaid tax.',
    highlights: ['GSTR-1 (Monthly/Quarterly)', 'GSTR-3B (Monthly)', 'GSTR-9 (Annual)', 'NIL Returns', 'ITC Reconciliation', 'Notice Handling'],
    documents: ['Sales Register (Invoice-wise)', 'Purchase Register with GSTIN of Suppliers', 'Previous Filed Returns', 'Bank Statements', 'Debit/Credit Notes'],
    timeline: 'Monthly / Quarterly',
    faqs: [
      { question: 'What is the due date for GSTR-3B?', answer: '20th of every month for monthly filers. Quarterly filers (QRMP scheme) file by 22nd/24th of the month following the quarter.' },
      { question: 'What happens if I don\'t file GST returns?', answer: 'Late fee of ₹50/day (₹20/day for Nil returns) is charged. Repeated non-filing leads to GSTIN cancellation and legal notices.' },
    ],
    benefits: [
      { title: 'Avoid Penalties', desc: 'Timely filing eliminates late fees and prevents interest accumulation on tax dues.' },
      { title: 'ITC Optimization', desc: 'Proper GSTR-1 matching ensures you claim maximum Input Tax Credit.' },
      { title: 'Compliance Record', desc: 'Clean GST compliance history improves credit score and bank loan eligibility.' },
    ],
  },

  /* ── INCOME TAX ── */
  'itr-filing': {
    title: 'ITR Filing for Salaried Individuals',
    tagline: 'File your income tax return accurately and on time',
    description: 'Income Tax Return (ITR) filing is mandatory for salaried individuals earning above the basic exemption limit. Our experts ensure maximum deductions (80C, 80D, HRA) and accurate filing using ITR-1 or ITR-2.',
    highlights: ['Maximum Deductions (80C/80D)', 'HRA & Home Loan Benefits', 'Capital Gains (ITR-2)', 'Refund Processing', 'Advance Tax Advisory', 'Form 26AS Reconciliation'],
    documents: ['Form 16 from Employer', 'PAN Card', 'Aadhaar Card', 'Bank Statements', 'Investment Proofs (ELSS, PPF, LIC)', 'Rent Receipts (if HRA claimed)', 'Home Loan Statement'],
    timeline: '1–2 working days',
    faqs: [
      { question: 'What is the ITR filing deadline?', answer: '31st July for non-audit cases (individuals). 31st October for audit cases. Belated returns can be filed up to 31st December.' },
      { question: 'What is Form 26AS?', answer: 'Form 26AS is your tax passbook — it shows all TDS deducted, advance tax paid, and self-assessment tax. Always reconcile with Form 16.' },
      { question: 'Can I file ITR without Form 16?', answer: 'Yes. Using salary slips, bank statements, and Form 26AS, our experts can file accurate ITR even without Form 16.' },
    ],
    benefits: [
      { title: 'Maximum Refund', desc: 'We ensure all eligible deductions are claimed — 80C, 80D, HRA, home loan — to maximize your refund.' },
      { title: 'Loan Eligibility', desc: 'ITR acknowledgement is required for home loans, business loans, and visa applications.' },
      { title: 'Avoid Penalties', desc: 'Late filing attracts ₹5,000 penalty (₹1,000 if income < ₹5 lakh) plus interest on unpaid tax.' },
    ],
  },

  'business-itr': {
    title: 'Business ITR Filing',
    tagline: 'Expert ITR filing for sole proprietors, firms, and HUFs',
    description: 'Business ITR filing (ITR-3, ITR-4) covers income from business and profession. Includes computation of business income, allowable deductions, presumptive taxation (44AD/44ADA), and tax audit support.',
    highlights: ['ITR-3 & ITR-4 Filing', '44AD Presumptive Taxation', 'Business Expense Deductions', 'Depreciation Calculation', 'Tax Audit (if required)', 'Advance Tax Planning'],
    documents: ['PAN Card', 'Business Registration Certificate', 'Profit & Loss Statement', 'Balance Sheet', 'GST Returns', 'Bank Statements', 'TDS Certificates'],
    timeline: '3–5 working days',
    faqs: [
      { question: 'What is Section 44AD (Presumptive Taxation)?', answer: 'Under 44AD, small businesses with turnover up to ₹3 crore can declare 8% (6% for digital receipts) of turnover as profit — no books of accounts required.' },
      { question: 'When is a Tax Audit mandatory?', answer: 'Tax audit under 44AB is mandatory if business turnover exceeds ₹1 crore (₹10 crore for digital transactions) or professional income exceeds ₹50 lakh.' },
    ],
    benefits: [
      { title: 'Tax Saving', desc: 'Proper expense deductions — rent, salaries, depreciation, utilities — significantly reduce taxable income.' },
      { title: 'Presumptive Scheme', desc: 'Eligible businesses can use 44AD/44ADA to simplify compliance with no book-keeping requirement.' },
      { title: 'Audit Support', desc: 'Our CAs handle tax audit reports (Form 3CB-3CD) with timely submission.' },
    ],
  },

  'tds-return': {
    title: 'TDS Return Filing (Property)',
    tagline: 'TDS compliance for property purchase and rental transactions',
    description: 'When buying property above ₹50 lakh, the buyer must deduct 1% TDS and deposit via Form 26QB. Similarly, TDS on rent exceeding ₹50,000/month must be paid via Form 26QC. We handle complete TDS compliance.',
    highlights: ['Form 26QB (Property TDS)', 'Form 26QC (Rent TDS)', 'Form 16B / 16C Generation', 'Lower TDS Certificate (15G/15H)', 'TDS Challan Filing', 'Correction in Filed Returns'],
    documents: ['Sale Agreement / Rent Agreement', 'PAN of Buyer & Seller/Landlord', 'Property Details', 'Bank Payment Details', 'Aadhaar of Parties'],
    timeline: '1–2 working days',
    faqs: [
      { question: 'What is the due date for Form 26QB?', answer: 'Within 30 days from the end of the month in which TDS was deducted on property purchase.' },
      { question: 'What if TDS is not deducted on property?', answer: 'The buyer can be held liable for the TDS amount + 1% per month interest + 1.5% per month for late deposit + possible prosecution.' },
    ],
    benefits: [
      { title: 'Avoid Notices', desc: 'Correct TDS filing prevents income tax notices to both buyer and seller.' },
      { title: 'Form 16B Download', desc: 'We generate and provide Form 16B (TDS certificate) for the seller to claim credit.' },
      { title: 'Expert Handling', desc: 'Avoid common errors in 26QB that trigger automatic mismatches and demands.' },
    ],
  },

  /* ── MCA / ROC ── */
  'company-compliance': {
    title: 'Company Annual Compliance',
    tagline: 'Stay ROC-compliant and avoid MCA penalties',
    description: 'Every Private Limited Company must file annual returns (MGT-7) and financial statements (AOC-4) with MCA by statutory deadlines. Non-filing attracts ₹100/day penalty and director disqualification.',
    highlights: ['AOC-4 (Financial Statements)', 'MGT-7 / MGT-7A (Annual Return)', 'Board Meeting Minutes', 'Director KYC (DIR-3)', 'ADT-1 (Auditor Appointment)', 'Statutory Audit'],
    documents: ['Audited Financial Statements', 'Board Resolutions', 'Shareholder Register', 'Director Details & DIN', 'Previous Year Filed Returns'],
    timeline: '5–7 working days (after receiving documents)',
    faqs: [
      { question: 'What is the due date for AOC-4?', answer: 'AOC-4 must be filed within 30 days from the date of AGM (Annual General Meeting). AGM must be held by 30th September.' },
      { question: 'What happens if a company misses ROC filings?', answer: 'MCA levies ₹100/day penalty per form. Directors who fail to file for 3 consecutive years face DIN deactivation and disqualification.' },
      { question: 'Is a statutory audit mandatory for all companies?', answer: 'Yes. Every company (regardless of turnover or profit) must get its accounts audited by a practicing Chartered Accountant.' },
    ],
    benefits: [
      { title: 'Avoid Penalties', desc: 'Stay penalty-free with timely AOC-4 and MGT-7 filings before due dates.' },
      { title: 'Director Protection', desc: 'Avoid DIN deactivation and disqualification for non-compliant directors.' },
      { title: 'Bank Loan Eligibility', desc: 'Updated ROC filings are mandatory for business loans and bank financing.' },
    ],
  },

  'llp-compliance': {
    title: 'LLP Annual Compliance',
    tagline: 'Complete LLP regulatory filings — Form 8 and Form 11',
    description: 'Every LLP must file Form 11 (Annual Return) by 30th May and Form 8 (Statement of Accounts & Solvency) by 30th October each year. Late filing attracts ₹100/day penalty.',
    highlights: ['Form 11 (Annual Return)', 'Form 8 (Statement of Accounts)', 'LLP Agreement Amendment', 'Partner Addition/Removal', 'Designated Partner KYC', 'Income Tax Return (ITR-5)'],
    documents: ['LLP Agreement', 'Financial Statements (P&L, Balance Sheet)', 'Partner Details', 'DIN/DPIN of Partners', 'Bank Statements'],
    timeline: '3–5 working days',
    faqs: [
      { question: 'Is audit mandatory for LLP?', answer: 'Only if turnover exceeds ₹40 lakh or capital contribution exceeds ₹25 lakh. Otherwise, only solvency declaration is needed.' },
      { question: 'What is Form 8 for LLP?', answer: 'Form 8 is the Statement of Accounts and Solvency — it contains the Balance Sheet and P&L of the LLP and must be filed by 30th October.' },
    ],
    benefits: [
      { title: 'Penalty Avoidance', desc: 'Timely Form 11 and Form 8 filing avoids ₹100/day late fee compounding quickly.' },
      { title: 'Complete Package', desc: 'We handle both MCA ROC filings and income tax return (ITR-5) for the LLP.' },
      { title: 'Expert Professional Support', desc: 'Dedicated professional assigned for your LLP throughout the year.' },
    ],
  },

  'director-change': {
    title: 'Director Addition / Change',
    tagline: 'Seamlessly add, remove or change directors in your company',
    description: 'Adding or changing directors requires filing Form DIR-12 with MCA along with Board Resolution and consent of the new director. Removal of a director may additionally require shareholder approval.',
    highlights: ['Form DIR-12 Filing', 'Board Resolution Drafting', 'DIN Allotment (if needed)', 'Consent Letter (DIR-2)', 'Shareholder Resolution (if applicable)', 'Intimation to MCA'],
    documents: ['Board Resolution for Director Change', 'Consent Letter (Form DIR-2)', 'PAN & Aadhaar of New Director', 'Address Proof of New Director', 'Photograph of New Director'],
    timeline: '3–5 working days',
    faqs: [
      { question: 'Can a director be removed without consent?', answer: 'Yes — shareholders can remove a director by passing an Ordinary Resolution in a General Meeting under Section 169 of Companies Act.' },
      { question: 'What is DIN?', answer: 'Director Identification Number (DIN) is a unique 8-digit number required for any person to become a director of a company in India.' },
    ],
    benefits: [
      { title: 'Fast Filing', desc: 'DIR-12 filed within 30 days of board resolution — we ensure zero delays.' },
      { title: 'Legal Documentation', desc: 'Properly drafted board resolutions and consent letters to ensure legal validity.' },
      { title: 'Expert Guidance', desc: 'Professional guidance on process, due dates, and implications for existing directors.' },
    ],
  },

  /* ── LICENSES ── */
  'fssai-registration': {
    title: 'FSSAI License Registration',
    tagline: 'Mandatory food license for all food businesses in India',
    description: 'FSSAI (Food Safety and Standards Authority of India) license is mandatory for all food businesses — manufacturers, traders, restaurants, and online food aggregators. Get your FoSCoS registration in 7–15 days.',
    highlights: ['Basic / State / Central License', 'Food Business Operator (FBO) Compliance', 'Annual Renewal Support', 'Product Category Coverage', 'eCommerce Food Sellers', 'Import / Export Food License'],
    documents: ['PAN Card of Business Owner', 'Aadhaar Card', 'Business Registration Certificate', 'Food Safety Management Plan', 'List of Food Products', 'Premises Proof (Rent Agreement / Ownership)'],
    timeline: '7–15 working days',
    faqs: [
      { question: 'What FSSAI license do I need?', answer: 'Basic Registration for turnover < ₹12 lakh. State License for ₹12 lakh–20 crore. Central License for > ₹20 crore or for importers/exporters.' },
      { question: 'What is FoSCoS?', answer: 'Food Safety Compliance System (FoSCoS) is the updated FSSAI portal replacing Food Licensing and Registration System (FLRS) for all FSSAI applications.' },
    ],
    benefits: [
      { title: 'Legal Compliance', desc: 'Operating without FSSAI license attracts ₹5 lakh fine and 3-6 months imprisonment.' },
      { title: 'Consumer Trust', desc: 'FSSAI logo on packaging builds instant trust with consumers.' },
      { title: 'Export Eligibility', desc: 'Central FSSAI License is mandatory for exporting food products from India.' },
    ],
  },

  'iec-registration': {
    title: 'Import Export Code (IEC) Registration',
    tagline: 'Mandatory for every business engaged in import or export',
    description: 'Import Export Code (IEC) is a 10-digit code issued by DGFT (Directorate General of Foreign Trade). It is mandatory for all importers and exporters in India, including e-commerce exporters on platforms like Amazon Global.',
    highlights: ['10-Digit IEC Code', 'Lifetime Validity', 'Amazon Global / Flipkart Export', 'Bank Forex Transactions', 'Customs Clearance', 'Annual Updation on DGFT'],
    documents: ['PAN Card of Entity', 'Aadhaar Card of Director/Owner', 'Bank Certificate / Cancelled Cheque', 'Address Proof of Business', 'Digital Photograph'],
    timeline: '3–5 working days',
    faqs: [
      { question: 'Is IEC required for every shipment?', answer: 'Yes. Customs authorities require IEC for every import/export consignment. Banks also require IEC for foreign currency transactions.' },
      { question: 'What is annual IEC updation?', answer: 'IEC holders must update their IEC on the DGFT portal every year between April and June, even if there are no changes. Failure leads to deactivation.' },
    ],
    benefits: [
      { title: 'Global Trade Access', desc: 'IEC is your gateway to international markets — enabling legal import and export operations.' },
      { title: 'Export Incentives', desc: 'Access government export promotion schemes: MEIS, SEIS, RoDTEP, and PLI schemes.' },
      { title: 'Forex Transactions', desc: 'Required for all foreign currency banking transactions through AD Category banks.' },
    ],
  },

  /* ── HR & PAYROLL ── */
  'pf-registration': {
    title: 'PF (EPF) Registration',
    tagline: 'Mandatory EPF registration for businesses with 20+ employees',
    description: 'Every establishment employing 20 or more employees must register with the Employees\' Provident Fund Organisation (EPFO). The employer contributes 12% of basic salary + DA towards PF.',
    highlights: ['EPFO Registration', 'Monthly PF Return Filing', 'ECR Challan Generation', 'Employee UAN Activation', 'PF Transfer Support', 'Pension Scheme (EPS) Coverage'],
    documents: ['Certificate of Incorporation / Partnership Deed', 'PAN Card of Business', 'GST Certificate', 'Address Proof', 'Bank Details', 'List of Employees with Aadhaar & Bank Details'],
    timeline: '5–7 working days',
    faqs: [
      { question: 'What is the PF contribution rate?', answer: 'Employee contributes 12% of Basic+DA. Employer contributes 12% — of which 8.33% goes to EPS (Pension) and 3.67% to EPF.' },
      { question: 'What is UAN?', answer: 'Universal Account Number (UAN) is a 12-digit unique number assigned to every PF member. It remains constant throughout their working life.' },
    ],
    benefits: [
      { title: 'Employee Welfare', desc: 'PF provides retirement corpus, insurance, and pension for employees — improving talent retention.' },
      { title: 'Legal Compliance', desc: 'Non-registration attracts imprisonment up to 3 years and fine — mandatory for 20+ employees.' },
      { title: 'Tax Deduction', desc: 'Employer PF contribution is a deductible business expense reducing taxable income.' },
    ],
  },

  'esic-registration': {
    title: 'ESIC Registration',
    tagline: 'Mandatory health insurance for employees earning up to ₹21,000/month',
    description: 'ESIC (Employees\' State Insurance Corporation) provides medical, sickness, maternity and disability benefits to employees earning up to ₹21,000/month. Mandatory for entities with 10+ employees.',
    highlights: ['ESIC Registration (10+ employees)', 'Monthly ESI Return Filing', 'Employee IP Number Generation', 'Medical Benefit Coverage', 'Maternity Benefit', 'Disability & Death Benefit'],
    documents: ['Certificate of Incorporation', 'PAN of Employer', 'Bank Account Details', 'Employee Details (Aadhaar, Salary, Designation)', 'Address Proof of Establishment'],
    timeline: '3–5 working days',
    faqs: [
      { question: 'What is the ESI contribution rate?', answer: 'Employer contributes 3.25% of gross wages. Employee contributes 0.75% of gross wages (total 4%).' },
      { question: 'What benefits do ESI employees get?', answer: 'Medical treatment for self and family at ESI hospitals, sickness benefit (70% wages for 91 days), maternity benefit (100% wages for 26 weeks), and more.' },
    ],
    benefits: [
      { title: 'Medical Coverage', desc: 'Full medical care for covered employees and their families at ESI hospitals — at zero cost.' },
      { title: 'Employee Satisfaction', desc: 'ESI benefits improve employee loyalty and reduce absenteeism significantly.' },
      { title: 'Legal Protection', desc: 'Eligible non-registered employers face prosecution and fines under ESI Act.' },
    ],
  },

  /* ── RA LICENCE ── */
  'ra-license': {
    title: 'RA License Registration',
    tagline: 'BCAS-approved Regulated Agent licence for air cargo security',
    description: 'A Regulated Agent (RA) licence issued by BCAS (Bureau of Civil Aviation Security) is mandatory for entities handling, screening, or transporting air cargo in India. Our experts guide you through the entire BCAS application and inspection process.',
    highlights: ['BCAS Approved Process', 'Document Preparation', 'Inspection Support', 'Security Training Coordination', 'Fast 30-Day Processing', '10000+ RA Clients Served'],
    documents: ['Company Incorporation Certificate', 'PAN & GST of Company', 'Director/Owner KYC', 'Office Premises Proof', 'Security Plan / Programme', 'Background Verification Reports of Staff'],
    timeline: '25–45 working days',
    faqs: [
      { question: 'Who needs an RA License?', answer: 'All entities handling, transporting, or screening air cargo — freight forwarders, consolidators, warehouses, couriers — must have a valid RA license from BCAS.' },
      { question: 'What is the validity of RA License?', answer: 'RA Licenses are typically valid for 2 years from the date of grant and must be renewed before expiry.' },
      { question: 'What is BCAS inspection?', answer: 'BCAS conducts physical inspection of your premises, security equipment, and staff training records before granting the RA license.' },
    ],
    benefits: [
      { title: 'Legal Air Cargo Operations', desc: 'Without RA license, entities cannot handle, screen, or transport air cargo in India.' },
      { title: 'Business Growth', desc: 'RA status opens access to contracts with airlines, IATA agents, and international freight companies.' },
      { title: 'Expert Inspection Support', desc: 'Our team accompanies you through BCAS inspection — ensuring first-time approval.' },
    ],
  },

  'ra-renewal': {
    title: 'RA License Renewal',
    tagline: 'Renew your BCAS Regulated Agent licence before it expires',
    description: 'RA Licenses must be renewed before expiry. Operating with an expired RA license is illegal and leads to immediate suspension of air cargo operations. Start renewal process 90 days before expiry.',
    highlights: [],
    documents: ['Existing RA License Copy', 'Updated company documents', 'Renewed staff KYC and background checks', 'Updated Security Programme', 'Premises proof (if changed)'],
    timeline: '',
    faqs: [
      { question: 'When should I start the renewal?', answer: 'We recommend starting 90 days before expiry to allow time for document preparation, BCAS processing, and any re-inspection.' },
      { question: 'What happens if RA license expires?', answer: 'Operations must immediately cease. Airlines and cargo terminals will reject cargo from entities with expired RA status.' },
    ],
    benefits: [
      { title: 'Uninterrupted Operations', desc: 'Timely renewal ensures zero disruption to your air cargo handling business.' },
      { title: 'Compliance Assurance', desc: 'Our experts ensure all BCAS requirements are met before re-inspection.' },
    ],
  },

  'branch-office': {
    title: 'Branch Office Open / Shutdown',
    tagline: 'Add or close a branch in your BCAS Regulated Agent certificate',
    description: 'RA License holders need to inform BCAS and update their Regulated Agent Certificate (RC) when opening a new branch or closing an existing one. Failure to update leads to compliance violations.',
    highlights: ['BCAS Branch Addition', 'RC Amendment', 'Branch Inspection Support', 'Branch Shutdown Filing', 'Documentation Assistance', 'Minimal Turnaround Time'],
    documents: ['Existing RA License / RC Copy', 'New Branch Premises Proof', 'NOC from Premises Owner', 'Branch Security Plan', 'Branch Staff Details'],
    timeline: '10–20 working days',
    faqs: [
      { question: 'Do I need a separate RA license for each branch?', answer: 'No. Branches are added to the existing Regulated Agent Certificate (RC). Each branch must pass a separate BCAS inspection.' },
    ],
    benefits: [
      { title: 'Legal Branch Operations', desc: 'All branch locations must be listed in the RC for lawful air cargo operations.' },
      { title: 'Seamless Process', desc: 'We manage BCAS correspondence and inspection coordination for branch additions.' },
    ],
  },

  /* ── ACCOUNTING & CONSULTING ── */
  'accounting': {
    title: 'Accounting Services',
    tagline: 'Professional bookkeeping and accounting for businesses of all sizes',
    description: 'Our accounting services include day-to-day bookkeeping, financial statement preparation, bank reconciliation, accounts payable/receivable management, and monthly MIS reports — providing complete financial visibility.',
    highlights: ['Monthly Bookkeeping', 'Financial Statement Preparation', 'Bank Reconciliation', 'GST-Ready Accounts', 'Payroll Accounting', 'Monthly MIS Reports'],
    documents: ['Bank Statements', 'Sales Invoices', 'Purchase Bills', 'Expense Vouchers', 'Previous Financial Statements (if any)'],
    timeline: 'Monthly retainer',
    faqs: [
      { question: 'Do you use accounting software?', answer: 'Yes. We work with Tally Prime, QuickBooks, Zoho Books, and Microsoft Excel — adapting to your preferred system.' },
      { question: 'What is MIS report?', answer: 'Management Information System (MIS) report is a monthly financial summary — P&L, cash flow, outstanding receivables — helping owners make informed decisions.' },
    ],
    benefits: [
      { title: 'Financial Clarity', desc: 'Always know your exact financial position — profit, cash flow, receivables, and payables.' },
      { title: 'Tax Ready', desc: 'GST-compliant books maintained throughout the year — no last-minute scramble at tax time.' },
      { title: 'Cost Saving', desc: 'Outsourced accounting is 60-70% cheaper than hiring a full-time in-house accountant.' },
    ],
  },

  'tax-planning': {
    title: 'Tax Planning & Advisory',
    tagline: 'Strategic tax planning to legally minimize your tax liability',
    description: 'Our professional team analyses your income structure and business operations to recommend legal tax-saving strategies — HUF creation, salary structuring, presumptive taxation, capital gains planning, and more.',
    highlights: ['Corporate Tax Planning', 'Individual Tax Optimization', 'Salary Structuring', 'HUF Tax Planning', 'Capital Gains Management', 'Advance Tax Computation'],
    documents: ['Income Tax Returns (last 3 years)', 'Balance Sheet & P&L (for business)', 'Salary Slips', 'Investment Portfolio Details', 'Property Details (if any)'],
    timeline: '3–5 working days (initial advisory)',
    faqs: [
      { question: 'How much tax can I legally save?', answer: 'Individuals can save up to ₹1.5 lakh under 80C, ₹25,000 under 80D, and additional savings through HRA, home loan deductions, and NPS (80CCD). Businesses have additional deductions.' },
      { question: 'What is salary structure optimization?', answer: 'Restructuring CTC components — HRA, food coupons, LTA, mobile reimbursement — to maximize tax-free components and reduce TDS deduction.' },
    ],
    benefits: [
      { title: 'Legal Tax Saving', desc: '100% legal tax planning within Income Tax Act provisions — no grey areas.' },
      { title: 'Year-Round Planning', desc: 'Proactive planning from April — not reactive filing in July — maximizes savings.' },
      { title: 'Business + Personal', desc: 'Integrated planning for proprietors covering both business and personal taxes.' },
    ],
  },

  /* ── BRAND & DIGITAL ── */
  'logo-design': {
    title: 'Professional Logo Design',
    tagline: 'Create a unique identity for your brand',
    description: 'Our professional logo design service helps you create a memorable brand identity that resonates with your target audience.',
    highlights: ['Custom Design', 'Multiple Revisions', 'High-Resolution Files', 'Source Files Included', 'Brand Guidelines', 'Fast Delivery'],
    documents: ['Company Name', 'Tagline (if any)', 'Preferred Colors', 'Business Description'],
    timeline: '3–5 working days',
    faqs: [
      { question: 'Will I get the source files?', answer: 'Yes, we provide all high-resolution and vector source files.' },
    ],
    benefits: [
      { title: 'Brand Identity', desc: 'Stand out from competitors with a professional and unique logo.' },
    ],
  },
  'business-website': {
    title: 'Business Website Development',
    tagline: 'Get a professional, responsive website for your business',
    description: 'We build fast, secure, and SEO-optimized business websites that help you attract more customers and grow your online presence.',
    highlights: ['Custom Design', 'Mobile Responsive', 'SEO Optimized', 'Fast Loading', 'Secure (SSL)', 'CMS Integration'],
    documents: ['Company Profile', 'Logo', 'Content / Text', 'Images'],
    timeline: '10–15 working days',
    faqs: [
      { question: 'Will the website be mobile friendly?', answer: 'Yes, all our websites are fully responsive and work perfectly on all devices.' },
    ],
    benefits: [
      { title: 'Online Presence', desc: 'Establish a credible online presence to reach more customers.' },
    ],
  },
  'digital-marketing': {
    title: 'Digital Marketing Services',
    tagline: 'Grow your business with data-driven digital marketing',
    description: 'Our comprehensive digital marketing services include SEO, social media management, and paid advertising to boost your online visibility and sales.',
    highlights: ['SEO Optimization', 'Social Media Management', 'Google Ads', 'Facebook Ads', 'Content Marketing', 'Analytics & Reporting'],
    documents: ['Website URL', 'Target Audience Details', 'Marketing Budget', 'Competitor Details'],
    timeline: 'Monthly retainer',
    faqs: [
      { question: 'How soon can I see results?', answer: 'While paid ads can generate immediate traffic, SEO usually takes 3-6 months to show significant results.' },
    ],
    benefits: [
      { title: 'More Leads', desc: 'Attract targeted traffic and generate high-quality leads for your business.' },
    ],
  },
};

export default serviceData;

export function getServiceData(slug: string): ServiceData | null {
  return serviceData[slug] || null;
}
