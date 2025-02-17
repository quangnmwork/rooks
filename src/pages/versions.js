import React from "react";
import Layout from "@theme/Layout";
import useGlobalData from "@docusaurus/useGlobalData";
import {
  useVersions,
  useLatestVersion,
} from "@docusaurus/plugin-content-docs/client";

function Versions(props) {
  const { config: siteConfig } = props;
  const globalData = useGlobalData();
  const docsPath =
    globalData["docusaurus-plugin-content-docs"]?.default?.path || "/docs";
  const versions = useVersions();
  const latestVersion = useLatestVersion();
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  return (
    <Layout title="Versions">
      <div>
        <div className="post">
          <header className="postHeader">
            <h1>{siteConfig.title} Versions</h1>
          </header>
          <p>New versions of this project are released every so often.</p>
          <h3 id="latest">Current version (Stable)</h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>{latestVersion.label}</th>
                <td>
                  {/* You are supposed to change this href where appropriate
                        Example: href="<baseUrl>/docs(/:language)/:id" */}
                  <a
                    href={`${docsPath}/${
                      props.language ? props.language + "/" : ""
                    }`}
                  >
                    Documentation
                  </a>
                </td>
                <td>
                  <a href={`${repoUrl}/releases/tag/${latestVersion.label}`}>
                    Release Notes
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            This is the version that is configured automatically when you first
            install this project.
          </p>
          <h3 id="rc">Pre-release versions</h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>master</th>
                <td>
                  {/* You are supposed to change this href where appropriate
                        Example: href="<baseUrl>/docs(/:language)/next/:id" */}
                  <a
                    href={`${docsPath}/${
                      props.language ? props.language + "/" : ""
                    }next`}
                  >
                    Documentation
                  </a>
                </td>
                <td>
                  <a href={repoUrl}>Source Code</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>Other text describing this section.</p>
          <h3 id="archive">Past Versions</h3>
          <p>Here you can find previous versions of the documentation.</p>
          <table className="versions">
            <tbody>
              {versions.map((version) =>
                version.name !== latestVersion.name ? (
                  <tr>
                    <th>{version.label}</th>
                    <td>
                      {/* You are supposed to change this href where appropriate
                        Example: href="<baseUrl>/docs(/:language)/:version/:id" */}
                      <a
                        href={`${docsPath}/${
                          props.language ? props.language + "/" : ""
                        }${version.name}`}
                      >
                        Documentation
                      </a>
                    </td>
                    <td>
                      <a href={`${repoUrl}/releases/tag/${version.label}`}>
                        Release Notes
                      </a>
                    </td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
          <p>
            You can find past versions of this project on{" "}
            <a href={repoUrl}>GitHub</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Versions;
