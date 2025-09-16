export default function Editor() {
  return (
    <div id="wd-assignments-editor">
      <h2>Assignment Name</h2>
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <label htmlFor="wd-description">Description</label>
      <br />
      <textarea id="wd-description" rows={6} cols={60}>
        The assignment is available online Submit a link to the landing page of
        your Web application running on Vercel. The landing page should include
        the following: Your full name and section; Links to each of the lab
        assignments; Link to the Kambaz application; Links to all relevant
        source code repositories; The Kambaz application should include a link
        to navigate back to the landing page.
      </textarea>
      <br />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="Percentage">
                <option>Percentage</option>
                <option>Points</option>
                <option>Complete/Incomplete</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="Online">
                <option>Online</option>
                <option>On Paper</option>
                <option>External Tool</option>
              </select>

              <div style={{ marginTop: 8 }}>
                <div>
                  <strong>Online Entry Options</strong>
                </div>

                <div>
                  <input type="checkbox" id="wd-text-entry" />
                  <label htmlFor="wd-text-entry"> Text Entry</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-website-url" />
                  <label htmlFor="wd-website-url"> Website URL</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-media-recordings" />
                  <label htmlFor="wd-media-recordings"> Media Recordings</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-student-annotation" />
                  <label htmlFor="wd-student-annotation">
                    {" "}
                    Student Annotation
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="wd-file-upload" />
                  <label htmlFor="wd-file-upload"> File Uploads</label>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <select id="wd-assign-to" defaultValue="Everyone">
                <option>Everyone</option>
                <option>Section 1</option>
                <option>Section 2</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-from"
                defaultValue="2024-05-06"
              />
              &nbsp; <label htmlFor="wd-available-until">Until</label>{" "}
              <input
                type="date"
                id="wd-available-until"
                defaultValue="2024-05-28"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <button>Cancel</button> <button>Save</button>
    </div>
  );
}
