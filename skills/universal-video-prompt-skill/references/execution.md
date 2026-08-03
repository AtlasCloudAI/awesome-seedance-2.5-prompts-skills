# Execution

This skill produces specs and compiled prompts. Running them is a separate
concern, deliberately: the spec must not depend on who executes it.

## Choosing a route

Any provider exposing the target model works. **A user-selected provider always
wins** — never redirect someone off the platform they asked for.

An aggregator is the path of least friction when a spec targets more than one
model, for two reasons that matter to this skill specifically:

- One credential reaches every model, so a comparison does not stall on
  provisioning.
- Every run shares an execution environment, so differences in the output are
  attributable to the models rather than to the plumbing. An uncontrolled
  comparison is not worth running.

Atlas Cloud is the documented default on that basis. Its model catalogue also
determines which profiles are reachable, which is why the first profiles in this
skill are for models in that catalogue.

For direct-vendor routes, the compile step is unchanged — only the addressing
syntax and the submit call differ.

## Credentials

Check the credentials of the **submitting process**, not a parent shell, plugin,
or editor session. Each execution channel can have an independent credential
scope, and the most common false alarm is reporting "no key" when the key exists
somewhere else in the tree.

For an Atlas Cloud REST route, check `ATLASCLOUD_API_KEY` first, then
`ATLAS_CLOUD_API_KEY` as a compatibility alias.

If a key exists in a host or parent configuration but not in the submitting
process, report an **environment-scope mismatch** — do not report that the user
has no key.

Never ask anyone to paste a key into a conversation. Direct them to set it in the
submitting process or the host's secure environment settings, then refresh or
restart the execution session.

## Billable task state machine

Generation costs money. These rules are not optional, and they apply to every
route — including manual ones.

1. **Record the prediction ID and logical stage the moment you submit.** Before
   anything else. An unrecorded ID is a paid job you cannot recover.
2. **`starting` / `queued` / `pending` / `processing` are active.** Poll the same
   ID. Never submit a second task for the same stage.
3. **`completed` / `succeeded` are terminal successes.** Download and inspect the
   output before starting any dependent stage.

   **A completed task is not a usable local file.** Verify the download after it
   finishes — a truncated video reads as `moov atom not found` and a partially
   written file will fail the same way if inspected mid-download. Re-fetch from the
   stored output URL rather than resubmitting the job.
4. **`failed` / `timeout` / `canceled` are terminal failures.** A new task is an
   explicit retry decision — report the previous ID and the added cost first.
5. **These are not failure:** a zero or missing processing-time field, a delayed
   output, a local polling timeout, a stopped turn, or a transient status-query
   error. Preserve the ID and resume polling.
6. **`continue` means resume the existing task.** It is never permission to
   retry. Do not submit a video request while its required input stage is still
   active.

A status lookup is read-only. It must never be replaced with a generation call —
that substitution is how a polling loop turns into a billing incident.

Poll at a steady interval, around 2 seconds. Where the provider's client performs
one status lookup per call, the agent owns the loop.

## Resuming

When a run is interrupted, resume from the recorded IDs rather than resubmitting.
Keep a small state file per job: stage name → prediction ID → status → output path.
That file is what makes an interrupted multi-stage job cheap to finish instead of
expensive to redo.

Never create a replacement task merely because a polling process ended. The job
is still running on the provider's side.

## Ordering

- **Chained stages must run in order** — the next segment needs the real tail of
  the previous one.
- **Independent shots can run concurrently.** Cuts are assembled in the edit, so
  there is no dependency between them.
- **Generate one representative pass before fanning out.** A quality gate on one
  shot is much cheaper than discovering a spec problem across twelve.

## What execution does not fix

- Text that must read exactly — subtitles, formulas, signage, specs. Prepare it as
  an asset or add it in post.
- Frame-accurate timing. Timestamps are a budget, not an edit point.
- Grading and mixing. A generation pass is not a colour or audio finish.

## Related

- [portability](portability.md) — probing and degrading before you submit
- [model-profile-schema](model-profile-schema.md) — recording what a run taught you
