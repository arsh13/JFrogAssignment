/**
 * Component Model with nested structure.
 * Each component has a name and an optional list of children.
 */
export class DependancyGraph {
    artifact: ArtifactDetails;
    components: ComponentDetails[];
}

export class ArtifactDetails {
    name: string;
    path: string;
    pkg_type: string;
    sha256: string;
    sha1: string;
    component_id: string;
}

export class ComponentDetails {
    component_name: string;
    component_id: string;
    package_type: string;
    version: string;
    created: string;
    modified: string;
    components?: ComponentDetails[];
}