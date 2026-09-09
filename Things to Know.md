# Playwright Installation – Policy Exception Troubleshooting

While installing Playwright in the desired folder, you may encounter a **PowerShell execution policy exception**. Follow the steps below to resolve the issue.

## Step 1: Initialize Playwright

Open the terminal in the desired project folder and run:

```bash
npm init playwright@latest
```

If you encounter a PowerShell execution policy error, proceed with the following steps.

## Step 2: Check the Current PowerShell Execution Policy

Open **PowerShell** and run:

```powershell
Get-ExecutionPolicy
```

This command displays the current execution policy configured on your system.

## Step 3: Set the Execution Policy for the Current User

In the **VS Code PowerShell terminal**, run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

If prompted for confirmation, select **Yes**.

This changes the execution policy only for the current Windows user and allows locally created scripts to run while requiring downloaded scripts to be appropriately signed.

## Step 4: Initialize Playwright Again

After changing the execution policy, run:

```bash
npm init playwright@latest
```

The Playwright setup should now proceed normally.

---

# Additional Troubleshooting

## 1. Error in `playwright.config.ts` Related to Node Types

If you encounter an error such as:

```text
Cannot find type definition file for 'node'
```

or a similar Node.js type-related error in `playwright.config.ts`, make sure the following reference is present:

```typescript
/// <reference types="node" />
```

Add it at the top of the `playwright.config.ts` file if required.

You may also need to ensure that Node.js type definitions are installed:

```bash
npm install --save-dev @types/node
```

---

## 2. DNS Result Order Issue

If Playwright/npm encounters a DNS or network-related issue, first check the current npm DNS result order configuration:

```bash
npm config get dns-result-order
```

If a custom value is configured and needs to be removed, run:

```bash
npm config delete dns-result-order
```

Then verify the configuration again:

```bash
npm config get dns-result-order
```

After making the change, retry the Playwright installation or the npm command that previously failed.

---

# Quick Reference

| Issue | Command / Solution |
|---|---|
| Initialize Playwright | `npm init playwright@latest` |
| Check PowerShell policy | `Get-ExecutionPolicy` |
| Fix PowerShell policy | `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned` |
| Node types error | Add `/// <reference types="node" />` |
| Install Node types | `npm install --save-dev @types/node` |
| Check npm DNS configuration | `npm config get dns-result-order` |
| Remove DNS configuration | `npm config delete dns-result-order` |

**Note:** Prefer changing the execution policy with `-Scope CurrentUser` rather than changing the policy for the entire system.