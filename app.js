const sections = [
  ["Challenge Title", "Challenge 1 - Taking the First Entrepreneurial Step."],
  ["The Problem", "People have viable ideas or skills but do not know the first move."],
  ["Who It Is For", "First-time founders, mentors, advisors, investors, and public support teams."],
  ["A Good Solution", "Turns an idea into a concrete first action with clear steps and support."],
  ["Founder Profile Section", "Captures founder, skill, idea, location, budget, and support needs."],
  ["Business Readiness Check", "Scores idea clarity, customer knowledge, documents, costs, and licenses."],
  ["Step-by-Step Business Roadmap", "Creates a personalized sequence from idea to launch."],
  ["License and Cost Estimator", "Estimates fees, approvals, setup costs, and operating costs."],
  ["Business Idea Validation Tool", "Tests customer demand before the founder spends heavily."],
  ["First Customer Finder", "Connects the founder to buyers, testers, pilots, and partners."],
  ["Mentor and Expert Matching", "Matches industry, legal, finance, marketing, and startup experts."],
  ["Pitch Deck and Business Plan Builder", "Builds a one-page plan, pitch deck outline, and cost summary."],
  ["Investment Requirement Section", "Lets the founder state how much investment is needed and why."],
  ["Investment Calculator", "Calculates startup costs, runway, funding gap, and structure."],
  ["Investor Connection Feature", "Separates verified investors, individual investors, and funding bodies."],
  ["Verified Investor Section", "Shows registration, verification, investment range, sectors, and profile."],
  ["Individual Investor Section", "Shows ID status, residence, personal investment range, and risk confirmation."],
  ["Government-Supported Agreement Form", "Creates a secure official connection before sensitive sharing."],
  ["Secure Founder-Investor Chat", "Opens communication only after verification and agreement."],
  ["Secure Document Room", "Lets founders control document viewing permissions."],
  ["Investor Verification and Rating System", "Adds trust signals, history, badges, and founder feedback."],
  ["Government Resource Directory", "Lists registration, licensing, grants, training, and support programs."],
  ["Grant and Funding Opportunities", "Suggests grants, competitions, loans, angels, VCs, and partnerships."],
  ["Founder Education Hub", "Teaches registration, pricing, profit, customers, equity, contracts, and scams."],
  ["Progress Tracker", "Shows what is complete and what still needs action."],
  ["Risk and Fraud Protection", "Includes verification, warnings, report buttons, and contract review."],
  ["Community Support Feature", "Founder groups, peer feedback, local circles, and success stories."],
  ["Marketplace for Services", "Verified legal, accounting, branding, website, marketing, and supplier support."],
  ["Meeting Booking System", "Books meetings with mentors, investors, advisors, customers, and experts."],
  ["Founder Protection Checklist", "Checks investor offer, equity, repayment, agreement, and legal review."],
  ["Example Solutions", "Action plan tool, checklist, mentor match, investor match, agreement form."],
  ["Desired Outcome", "Founder knows the first step, funding need, support path, and safe launch plan."]
];

const stages = [
  ["Idea added", "The founder enters the initial idea, skill, product, or service into the platform."],
  ["Founder profile created", "Name, skills, experience, location, business category, stage, and support needs are added."],
  ["Business type selected", "The founder chooses food, retail, online, service, tech, beauty, education, wellness, or creative."],
  ["Business readiness check completed", "The platform reviews clarity, customer, costs, license, investment, documents, and first-customer readiness."],
  ["Idea validation started", "The founder uses surveys, interviews, tests, landing pages, or pre-orders to validate demand."],
  ["Target customer identified", "The founder defines customer group, location, needs, problems, buying behavior, and reason to buy."],
  ["First action plan created", "The platform recommends the immediate next move such as customer interviews, cost list, license check, sample product, page, mentor, or summary."],
  ["License requirements identified", "Possible business license, trade license, home business permit, product approval, food safety, e-commerce, or professional permit is shown."],
  ["Cost estimate created", "The founder estimates license fees, equipment, materials, website, marketing, rent, staff, legal, and accounting."],
  ["Investment requirement added", "The founder states total funding required, use of funds, timeline, business stage, and support needed."],
  ["Investment calculator completed", "Startup cost, monthly cost, revenue, break-even, funding gap, and suggested amount are calculated."],
  ["Business plan drafted", "The founder creates a simple plan covering problem, solution, customer, competitors, pricing, costs, marketing, investment, and next steps."],
  ["Pitch deck created", "The founder creates an investor presentation with problem, solution, market, product, model, customers, competitors, financials, request, and profile."],
  ["Documents uploaded", "The founder uploads pitch deck, plan, cost breakdown, product photos, ID, license documents, registration, and projections."],
  ["Mentor matched", "The platform matches an expert based on the business type, such as food, retail, tech, legal, finance, or operations."],
  ["First customer contacted", "The founder contacts a local buyer, small business, pilot customer, early user, community member, or corporate partner."],
  ["Investor type selected", "The founder chooses verified investor, individual investor, angel, VC, family office, partner, accelerator, or corporate investor."],
  ["Investor profiles reviewed", "The founder checks investor name, verification, range, sectors, registration country, contact, background, and risk status."],
  ["Secure connection requested", "The founder requests a connection and both sides must confirm identity before communication."],
  ["Government-supported agreement signed", "Both sides sign identity, consent, confidentiality, anti-fraud, data sharing, responsibility, no-guarantee, and digital signature terms."],
  ["Secure chat opened", "Messages, file sharing, meeting requests, and communication records become available."],
  ["Meeting booked", "The founder books an investor meeting, mentor session, government advisor meeting, legal consultation, customer call, or pitch presentation."],
  ["Investment offer reviewed", "The founder reviews equity, profit-sharing, loan, partnership, grant, or revenue-based financing offers."],
  ["Founder protection checklist completed", "Verification, terms, agreement, equity, repayment, legal review, and suspicious behavior checks are completed."],
  ["Final decision made", "The founder accepts, rejects, requests changes, asks for legal review, chooses another investor, applies for a grant, or continues without funding."],
  ["Business launched", "The license, product, first customer, marketing, online page, and sales process are activated."],
  ["Progress tracked after launch", "Sales, customers, expenses, profit, funding use, mentor sessions, investor updates, and next growth steps are tracked."]
];

const costModels = {
  "Food business": {
    items: [["Trade or home business license", 6000], ["Food safety approval", 2500], ["Kitchen equipment and packaging", 18000], ["Branding and photography", 4500], ["Initial ingredients", 3500]],
    note: "Food businesses may need food safety, labeling, storage, and delivery requirements depending on location."
  },
  "Retail business": {
    items: [["Trade license", 7000], ["Inventory starter stock", 30000], ["Point-of-sale setup", 5000], ["Branding and signage", 9000], ["Marketing launch", 6000]],
    note: "Retail businesses should check activity classification, store location, import rules, and consumer protection requirements."
  },
  "Online business": {
    items: [["E-commerce license", 5500], ["Website or storefront", 8000], ["Payment setup", 2500], ["Digital marketing", 7000], ["Logistics setup", 4500]],
    note: "Online businesses should verify e-commerce, payment, privacy, delivery, and refund rules."
  },
  "Service business": {
    items: [["Professional service license", 6500], ["Tools and software", 7000], ["Brand identity", 4500], ["Website", 6000], ["Marketing and sales", 5500]],
    note: "Service businesses should check professional permits, insurance, client contracts, and invoice rules."
  },
  "Technology startup": {
    items: [["Startup or tech license", 9000], ["Prototype development", 45000], ["Cloud and software", 9000], ["Legal and IP support", 12000], ["Market testing", 8000]],
    note: "Technology startups may need data privacy, IP, software, regulatory sandbox, and partnership support."
  },
  "Beauty business": {
    items: [["Trade or salon license", 9000], ["Health and safety approvals", 4000], ["Equipment", 22000], ["Products and supplies", 9000], ["Branding and launch marketing", 7000]],
    note: "Beauty businesses should check hygiene, product use, staff qualification, premises, and safety requirements."
  },
  "Education business": {
    items: [["Education or training permit", 8000], ["Curriculum materials", 6000], ["Platform or classroom setup", 11000], ["Instructor onboarding", 7000], ["Marketing", 5000]],
    note: "Education businesses may require training approvals, instructor credentials, child safety rules, and content review."
  },
  "Health and wellness business": {
    items: [["Business license", 8500], ["Health approvals", 7000], ["Equipment", 18000], ["Professional insurance", 5000], ["Marketing", 6500]],
    note: "Health and wellness businesses should verify professional scopes, advertising claims, safety, and client consent requirements."
  },
  "Creative business": {
    items: [["Freelance or creative license", 4500], ["Equipment and software", 12000], ["Portfolio website", 5500], ["Branding", 4000], ["Launch marketing", 4500]],
    note: "Creative businesses should check freelance permits, contracts, copyright, usage rights, and payment terms."
  }
};

const mentors = [
  ["Food licensing expert", "Best for bakery, catering, packaged food, cloud kitchen, and delivery ideas."],
  ["Retail and branding advisor", "Best for stores, fashion, consumer goods, packaging, and launch positioning."],
  ["Technology startup advisor", "Best for app, software, AI, data, marketplace, and platform ideas."],
  ["Legal and contract advisor", "Best for founder agreements, investor terms, IP, and customer contracts."],
  ["Accounting and finance mentor", "Best for pricing, cost control, break-even, and funding requests."],
  ["Sales and first customer coach", "Best for outreach, customer interviews, pilots, and early sales."],
];

const investors = [
  {
    name: "Falcon Growth Partners",
    type: "Verified Investor",
    subtype: "Angel network",
    verification: "Verified company and representatives",
    range: "AED 100k - AED 750k",
    sectors: "Foodtech, retailtech, services",
    registration: "UAE registered entity",
    contact: "official investment desk",
    risk: "Low verification risk"
  },
  {
    name: "Mariam Al Nuaimi",
    type: "Individual Investor",
    subtype: "Private angel investor",
    verification: "Identity verified",
    range: "AED 25k - AED 150k",
    sectors: "Home business, wellness, education",
    registration: "Investing personally",
    contact: "verified private contact",
    risk: "Medium due diligence required"
  },
  {
    name: "Desert Seed Capital",
    type: "Verified Investor",
    subtype: "Venture capital firm",
    verification: "Licensed investment entity",
    range: "AED 500k - AED 3m",
    sectors: "Technology, fintech, healthtech",
    registration: "Regulated fund structure",
    contact: "official fund email",
    risk: "Low verification risk"
  },
  {
    name: "Community Enterprise Grant Desk",
    type: "Government-backed Funding Body",
    subtype: "Grant and pilot support",
    verification: "Public program verified",
    range: "AED 10k - AED 250k",
    sectors: "Youth, women, social impact, local services",
    registration: "Government-linked program",
    contact: "official program portal",
    risk: "Low verification risk"
  }
];

const lessons = [
  "How to register a business",
  "How to price a product",
  "How to calculate profit",
  "How to find customers",
  "How to speak to investors",
  "How equity works",
  "How to avoid scams",
  "How to prepare a pitch",
  "How to understand contracts",
  "How to manage early business finances"
];

const state = {
  profile: JSON.parse(localStorage.getItem("firststep_profile") || "{}"),
  completedStages: JSON.parse(localStorage.getItem("firststep_stages") || "[]"),
  selectedInvestor: null,
  agreementReady: false,
  documents: []
};

const currency = value => `AED ${Math.max(0, Number(value || 0)).toLocaleString("en-AE", { maximumFractionDigits: 0 })}`;
const qs = selector => document.querySelector(selector);
const qsa = selector => [...document.querySelectorAll(selector)];

function init() {
  renderSections();
  renderStages();
  renderCostCategories();
  renderMentors();
  renderInvestors("all");
  renderLessons();
  hydrateProfile();
  bindEvents();
  updateReadiness();
  calculateInvestment();
}

function bindEvents() {
  qs("#sectionSearch").addEventListener("input", renderSections);
  qs("#saveProfile").addEventListener("click", saveProfile);
  qs("#useDemo").addEventListener("click", useDemoProfile);
  qs("#resetDemo").addEventListener("click", resetDemo);
  qsa("#readinessChecklist input").forEach(input => input.addEventListener("change", updateReadiness));
  qs("#costCategory").addEventListener("change", renderCostModel);
  qs("#workspaceCost").addEventListener("input", renderCostModel);
  qs("#generateValidation").addEventListener("click", generateValidationPlan);
  qs("#createOutreach").addEventListener("click", createOutreachScript);
  qs("#buildPitch").addEventListener("click", buildPitchSummary);
  qs("#calculateInvestment").addEventListener("click", calculateInvestment);
  ["#calcStartup", "#calcMonthly", "#calcRunway", "#calcFounder", "#calcRevenue"].forEach(id => qs(id).addEventListener("input", calculateInvestment));
  qsa(".filter-button").forEach(button => button.addEventListener("click", () => {
    qsa(".filter-button").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    renderInvestors(button.dataset.filter);
  }));
  qs("#generateAgreement").addEventListener("click", generateAgreement);
  qs("#sendChat").addEventListener("click", sendChatMessage);
  qs("#chatInput").addEventListener("keydown", event => {
    if (event.key === "Enter") sendChatMessage();
  });
  qs("#documentUpload").addEventListener("change", addDocuments);
  qs("#bookMeeting").addEventListener("click", bookMeeting);
}

function renderSections() {
  const term = (qs("#sectionSearch")?.value || "").toLowerCase();
  const filtered = sections.filter(([title, text]) => `${title} ${text}`.toLowerCase().includes(term));
  qs("#sectionGrid").innerHTML = filtered.map(([title, text]) => {
    const number = sections.findIndex(item => item[0] === title) + 1;
    return `<article class="section-card"><span>${number}</span><h3>${title}</h3><p>${text}</p></article>`;
  }).join("");
}

function renderStages() {
  qs("#stageTimeline").innerHTML = stages.map(([title, text], index) => {
    const checked = state.completedStages.includes(index);
    return `<article class="stage-item ${checked ? "complete" : ""}">
      <div class="stage-number">${index + 1}</div>
      <div><h3>${title}</h3><p>${text}</p></div>
      <label aria-label="Mark ${title} complete"><input type="checkbox" data-stage-index="${index}" ${checked ? "checked" : ""} /></label>
    </article>`;
  }).join("");
  qsa("[data-stage-index]").forEach(input => input.addEventListener("change", updateStageProgress));
  updateStageCount();
}

function updateStageProgress(event) {
  const index = Number(event.target.dataset.stageIndex);
  if (event.target.checked && !state.completedStages.includes(index)) state.completedStages.push(index);
  if (!event.target.checked) state.completedStages = state.completedStages.filter(item => item !== index);
  localStorage.setItem("firststep_stages", JSON.stringify(state.completedStages));
  renderStages();
}

function updateStageCount() {
  const completed = state.completedStages.length;
  const percent = Math.round((completed / stages.length) * 100);
  qs("#stageCount").textContent = `${completed} of ${stages.length}`;
  qs("#progressBar").style.width = `${percent}%`;
}

function hydrateProfile() {
  Object.entries(state.profile).forEach(([key, value]) => {
    const field = qs(`[name="${key}"]`);
    if (field) field.value = value;
  });
}

function saveProfile() {
  const form = new FormData(qs("#founderForm"));
  state.profile = Object.fromEntries(form.entries());
  localStorage.setItem("firststep_profile", JSON.stringify(state.profile));
  const status = qs("#profileStatus");
  status.hidden = false;
  setTimeout(() => status.hidden = true, 2800);
  syncAgreementNames();
}

function useDemoProfile() {
  const demo = {
    founderName: "Aisha Al Mansoori",
    idea: "Healthy office snack boxes delivered weekly to Abu Dhabi workplaces",
    businessType: "Food business",
    stage: "Idea stage",
    location: "Abu Dhabi",
    budget: "15000",
    support: "Need food license guidance, first pilot customers, packaging supplier, and an angel investor for launch inventory."
  };
  state.profile = demo;
  localStorage.setItem("firststep_profile", JSON.stringify(demo));
  hydrateProfile();
  qs("#businessType").value = demo.businessType;
  qs("#costCategory").value = demo.businessType;
  renderCostModel();
  syncAgreementNames();
}

function resetDemo() {
  localStorage.removeItem("firststep_profile");
  localStorage.removeItem("firststep_stages");
  state.profile = {};
  state.completedStages = [];
  state.selectedInvestor = null;
  state.agreementReady = false;
  qsa("input, textarea").forEach(el => {
    if (el.type === "checkbox") el.checked = false;
    else if (!["calcStartup", "calcMonthly", "calcRunway", "calcFounder", "calcRevenue", "workspaceCost"].includes(el.id)) el.value = "";
  });
  renderStages();
  updateReadiness();
  lockChat();
}

function syncAgreementNames() {
  const founder = state.profile.founderName || "";
  const founderField = qs('[name="agreementFounder"]');
  if (founderField && !founderField.value) founderField.value = founder;
}

function updateReadiness() {
  const checks = qsa("#readinessChecklist input");
  const done = checks.filter(input => input.checked).length;
  const percent = Math.round((done / checks.length) * 100);
  const score = qs("#readinessScore");
  score.textContent = `${percent}%`;
  score.style.setProperty("--score-angle", `${percent * 3.6}deg`);
  const hint = qs("#readinessHint");
  if (percent < 35) hint.textContent = "Start with idea clarity, customer definition, and a basic cost list.";
  else if (percent < 70) hint.textContent = "Good progress. Focus on license requirements, first customer validation, and documents.";
  else hint.textContent = "Strong readiness. Prepare investor materials and secure connection checks.";
}

function renderCostCategories() {
  qs("#costCategory").innerHTML = Object.keys(costModels).map(key => `<option>${key}</option>`).join("");
  renderCostModel();
}

function renderCostModel() {
  const category = qs("#costCategory").value;
  const workspace = Number(qs("#workspaceCost").value || 0);
  const model = costModels[category];
  const items = [...model.items, ["Workspace or rent", workspace]];
  const total = items.reduce((sum, [, value]) => sum + Number(value), 0);
  qs("#costTotal").textContent = currency(total);
  qs("#costNote").textContent = model.note;
  qs("#costList").innerHTML = items.map(([name, value]) => `<div class="cost-row"><span>${name}</span><strong>${currency(value)}</strong></div>`).join("");
}

function generateValidationPlan() {
  const customer = qs("#customerInput").value || "your target customer";
  const problem = qs("#problemInput").value || "the problem you want to solve";
  const difference = qs("#differenceInput").value || "your main difference";
  const plan = [
    `Interview 10 people from ${customer} and ask how often they experience ${problem}.`,
    `Create a one-page offer explaining ${difference} and ask for feedback within 48 hours.`,
    "Run a small test with a sample product, prototype, or service mockup before spending on full launch.",
    "Ask at least 3 people if they would pay now, pre-order, join a pilot, or introduce a buyer.",
    "Record objections, price expectations, competitor names, and the exact words customers use."
  ];
  qs("#validationPlan").innerHTML = plan.map(item => `<li>${item}</li>`).join("");
}

function createOutreachScript() {
  const customerType = qs("#customerType").value;
  const idea = state.profile.idea || qs('[name="idea"]').value || "my business idea";
  qs("#outreachScript").innerHTML = `<strong>${customerType} outreach script</strong><br><br>Hello, I am testing ${idea}. I am looking for a small group of early customers to give honest feedback before launch. Would you be open to a 15-minute conversation or a simple pilot test this week? There is no obligation to buy. I only want to understand whether this solves a real need and what would make it useful for you.`;
}

function renderMentors() {
  qs("#mentorGrid").innerHTML = mentors.map(([title, text]) => `<article class="feature-card"><span class="badge blue">Match</span><h3>${title}</h3><p>${text}</p><button class="ghost-button small">Request match</button></article>`).join("");
}

function buildPitchSummary() {
  saveProfile();
  const form = new FormData(qs("#investmentForm"));
  const investment = Object.fromEntries(form.entries());
  const profile = state.profile;
  const summary = [
    "FIRSTSTEP BUSINESS SUMMARY",
    "",
    `Founder: ${profile.founderName || "Not added"}`,
    `Business idea: ${profile.idea || "Not added"}`,
    `Business type: ${profile.businessType || qs("#businessType").value}`,
    `Current stage: ${profile.stage || "Not added"}`,
    `Location: ${profile.location || "Not added"}`,
    "",
    "Problem and customer",
    `Target customer: ${qs("#customerInput").value || "To be validated"}`,
    `Problem solved: ${qs("#problemInput").value || "To be defined"}`,
    `Differentiation: ${qs("#differenceInput").value || "To be defined"}`,
    "",
    "Business model",
    `Revenue model: ${qs("#revenueModel").value || "To be added"}`,
    `Competitor: ${qs("#competitor").value || "To be researched"}`,
    `Marketing channel: ${qs("#marketingChannel").value || "To be selected"}`,
    "",
    "Investment request",
    `Amount requested: ${currency(investment.amount || 0)}`,
    `Purpose: ${investment.purpose || "Not added"}`,
    `Structure: ${investment.structure || "Not added"}`,
    `Timeline: ${investment.timeline || "Not added"}`,
    `Use of funds: ${investment.use || "Not added"}`,
    `Support needed besides money: ${investment.nonMoneySupport || profile.support || "Not added"}`,
    "",
    "Next first action",
    "Complete customer validation, confirm license requirements, prepare documents, and request a secure investor connection only after verification and agreement."
  ].join("\n");
  qs("#pitchOutput").value = summary;
}

function calculateInvestment() {
  const startup = Number(qs("#calcStartup").value || 0);
  const monthly = Number(qs("#calcMonthly").value || 0);
  const runway = Number(qs("#calcRunway").value || 0);
  const founder = Number(qs("#calcFounder").value || 0);
  const revenue = Number(qs("#calcRevenue").value || 0);
  const need = startup + monthly * runway - founder - revenue;
  qs("#investmentResult").textContent = `${currency(need)} suggested funding need`;
  const amountField = qs('[name="amount"]');
  if (!amountField.value) amountField.value = Math.max(0, need);
}

function renderInvestors(filter) {
  const list = filter === "all" ? investors : investors.filter(investor => investor.type === filter);
  qs("#investorList").innerHTML = list.map((investor, index) => {
    const globalIndex = investors.findIndex(item => item.name === investor.name);
    return `<article class="investor-card">
      <span class="badge ${investor.type === "Individual Investor" ? "green" : investor.type.includes("Government") ? "dark" : "blue"}">${investor.type}</span>
      <h3>${investor.name}</h3>
      <p>${investor.subtype}</p>
      <div class="investor-meta">
        <span>${investor.verification}</span>
        <span>${investor.range}</span>
        <span>${investor.sectors}</span>
        <span>${investor.registration}</span>
        <span>${investor.contact}</span>
        <span>${investor.risk}</span>
      </div>
      <button class="primary-button small" data-investor-index="${globalIndex}">Request secure connection</button>
    </article>`;
  }).join("");
  qsa("[data-investor-index]").forEach(button => button.addEventListener("click", selectInvestor));
}

function selectInvestor(event) {
  state.selectedInvestor = investors[Number(event.target.dataset.investorIndex)];
  syncAgreementNames();
  qs('[name="agreementInvestor"]').value = state.selectedInvestor.name;
  qs('[name="agreementDate"]').valueAsDate = new Date();
  qs("#agreement").scrollIntoView({ behavior: "smooth" });
}

function generateAgreement() {
  saveProfile();
  const form = qs("#agreementForm");
  const data = Object.fromEntries(new FormData(form).entries());
  const required = ["identity", "confidentiality", "antiFraud", "noGuarantee"].every(name => form.elements[name].checked);
  const founder = data.agreementFounder || state.profile.founderName || "Founder not specified";
  const investor = data.agreementInvestor || state.selectedInvestor?.name || "Investor not specified";
  const date = data.agreementDate || new Date().toISOString().slice(0, 10);
  const selected = state.selectedInvestor;
  qs("#agreementPreview").innerHTML = `
    <strong>Secure Connection Record</strong><br><br>
    <strong>Founder:</strong> ${founder}<br>
    <strong>Investor:</strong> ${investor}<br>
    <strong>Purpose:</strong> ${data.agreementPurpose || "Investment discussion"}<br>
    <strong>Date:</strong> ${date}<br>
    ${selected ? `<strong>Investor type:</strong> ${selected.type}<br><strong>Verification:</strong> ${selected.verification}<br><strong>Investment range:</strong> ${selected.range}<br>` : ""}
    <br><strong>Terms confirmed:</strong><br>
    - Identity verification<br>
    - Consent to communicate<br>
    - Basic confidentiality<br>
    - Data-sharing permission for this connection<br>
    - Anti-fraud declaration<br>
    - Conflict of interest declaration to be completed where relevant<br>
    - No investment is guaranteed<br>
    - Digital signatures required in final government-approved version<br><br>
    <strong>Status:</strong> ${required ? "Ready to open secure chat" : "Missing required confirmations"}
  `;
  if (required) unlockChat(founder, investor); else lockChat();
}

function unlockChat(founder, investor) {
  state.agreementReady = true;
  const panel = qs("#chatPanel");
  panel.classList.remove("locked");
  qs("#chatLockText").textContent = "Secure chat is now open because the agreement confirmations have been completed.";
  qs("#chatInput").disabled = false;
  qs("#sendChat").disabled = false;
  qs("#chatInput").placeholder = "Type a secure message";
  qs("#chatHistory").innerHTML = `<div class="chat-message system">Secure connection opened between ${founder} and ${investor}. Communication is recorded for safety.</div>`;
}

function lockChat() {
  state.agreementReady = false;
  qs("#chatPanel").classList.add("locked");
  qs("#chatLockText").textContent = "The secure chat is locked until the agreement preview is generated with all required confirmations.";
  qs("#chatInput").disabled = true;
  qs("#sendChat").disabled = true;
  qs("#chatHistory").innerHTML = `<div class="chat-message system">Secure chat will appear here after completion.</div>`;
}

function sendChatMessage() {
  const input = qs("#chatInput");
  const value = input.value.trim();
  if (!value || !state.agreementReady) return;
  qs("#chatHistory").insertAdjacentHTML("beforeend", `<div class="chat-message me">${escapeHtml(value)}</div>`);
  input.value = "";
}

function addDocuments(event) {
  state.documents.push(...[...event.target.files].map(file => ({ name: file.name, size: file.size })));
  renderDocuments();
}

function renderDocuments() {
  if (!state.documents.length) {
    qs("#documentList").innerHTML = `<p>No documents uploaded yet.</p>`;
    return;
  }
  qs("#documentList").innerHTML = state.documents.map(doc => `<div class="document-row"><div><strong>${escapeHtml(doc.name)}</strong><p>${Math.ceil(doc.size / 1024)} KB - browser only</p></div><select><option>Founder only</option><option>Verified investors</option><option>Selected investor</option><option>Government reviewer</option></select></div>`).join("");
}

function renderLessons() {
  qs("#lessonList").innerHTML = lessons.map((lesson, index) => `<article class="lesson-card"><div class="lesson-number">${index + 1}</div><div><h3>${lesson}</h3><p>Short practical lesson with beginner-friendly examples and action tasks.</p></div><button class="ghost-button small">Open lesson</button></article>`).join("");
}

function bookMeeting() {
  const type = qs("#meetingType").value;
  const date = qs("#meetingDate").value || "Date not selected";
  const notes = qs("#meetingNotes").value || "No notes added";
  qs("#meetingList").insertAdjacentHTML("afterbegin", `<div class="meeting-item"><strong>${type}</strong><p>${date}<br>${escapeHtml(notes)}</p></div>`);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
}

init();
