import job from 'schemas/documents/job'
import page from 'schemas/documents/page'
import project from 'schemas/documents/project'
import skill from 'schemas/documents/skill'
import button from 'schemas/objects/button'
import duration from 'schemas/objects/duration'
import milestone from 'schemas/objects/milestone'
import timeline from 'schemas/objects/timeline'
import home from 'schemas/singletons/home'
import profile from 'schemas/singletons/profile'
import settings from 'schemas/singletons/settings'

export const documentsSchemas = [page, project, skill, job]

export const singletonsSchemas = [home, settings, profile]

export const objectsSchemas = [milestone, timeline, duration, button]

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [home.name, page.name]
