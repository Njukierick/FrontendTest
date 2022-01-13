The challenge is to create a proof of concept front end application for an IATI Search Engine. We hope that beyond allowing us to appraise your technical skill this will give you a little insight into the technical side of IATI and the kind of work you could be expecting should you be successful.

In the /design directory you will find two design images. The first represents a landing page showing a simple search bar with the IATI logo above it and below a Search button. The second shows how the results obtained from the search API should be displayed.

In the /data directory you'll find three .json files of example responses named by the search term for you to use as mock data.

There are three fields in each search result.

The first, indicated in the example repeats as "The Publisher's Name", should be populated by the field "reporting_org_narrative"

The second, indicated in the example repeats as "Activity Title As Link To Activity View", should be populated by the field "title_narrative". This should link to the url https://example.com/<iati_identifier> where <iati_identifier> is populated by the field "iati_identifier".

The third, indicated in the example repeats with the text:

"… narrative text which contains the keyword or phrase as searched for, and with that highlighted in bold, such as covid. This then serves as a preview to the descriptive text of activity the user will see if they click through from title link. Such pages will provide over 1,000,000 dynamic Web pages of rich content all linking back to IATI sites, which is the meat of any effective SEO."

should be populated by the field ""description_narrative". The displayed text should be limited to 400 characters. The search term should be displayed in bold, as per the design. Should value of the field contain more than 400 characters a portion with the search term included should be displayed. Any characters stripped to meet the 400 char limit should be replaced with the string "..."

Finally, the pagination as seen at the bottom of the design should be implemented.

The implementation should be suitably responsive to changes in display ratios.

**Guiding Principles**

- Your solution should include a README file with clear instructions
  about how to run your software.
- If applicable the solution must be able to build on Linux.
- Please return your solution via email to ​alexl@devinit.org​
  attached as a compressed directory.
- Use whichever technologies you prefer, but try to keep the
  implementation as simple, as readable and as lightweight as
  possible.
- We have expressly defined the challenge in terms of design and requirements alone, as we're looking for someone who can lead the way in terms of front end implementation.

**Many thanks for your time, good luck, and should you have any questions please feel free to get in touch.**
