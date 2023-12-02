import building_4_bin from './building-4.bin?url';
import walls_color_jpg from './walls_color.jpg?url';
import roof_color_jpg from './roof_color.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_emissive_strength",
		"KHR_materials_specular",
		"KHR_materials_ior"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "Building_04.001",
			"rotation": [
				0,
				-0.002827130490913987,
				0,
				0.9999960064888
			],
			"scale": [
				0.5894461274147034,
				0.5894461274147034,
				0.5894461274147034
			],
			"translation": [
				27.647157669067383,
				18.73552894592285,
				29.01235008239746
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"emissiveFactor": [
				1,
				1,
				1
			],
			"emissiveTexture": {
				"index": 0
			},
			"extensions": {
				"KHR_materials_emissive_strength": {
					"emissiveStrength": 4.299999713897705
				},
				"KHR_materials_specular": {
					"specularColorFactor": [
						0.42037705477998155,
						0.42037705477998155,
						0.42037705477998155
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "walls_mat",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 1
				},
				"metallicFactor": 0,
				"roughnessFactor": 0.968181848526001
			}
		},
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_specular": {
					"specularColorFactor": [
						0.366482544268505,
						0.366482544268505,
						0.366482544268505
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "Roof_mat",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 2
				},
				"metallicFactor": 0
			}
		}
	],
	"meshes": [
		{
			"name": "Cube.025",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				},
				{
					"attributes": {
						"POSITION": 4,
						"NORMAL": 5,
						"TEXCOORD_0": 6
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 1,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 7,
					"material": 1,
					"mode": 4
				}
			]
		}
	],
	"textures": [
		{
			"sampler": 0,
			"source": 0
		},
		{
			"sampler": 0,
			"source": 0
		},
		{
			"sampler": 0,
			"source": 1
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "walls_color",
			"uri": walls_color_jpg
		},
		{
			"mimeType": "image/jpeg",
			"name": "roof_color",
			"uri": roof_color_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 13394,
			"max": [
				14.304579734802246,
				14.101447105407715,
				8.73091983795166
			],
			"min": [
				-14.233926773071289,
				-11.56140422821045,
				-7.775274753570557
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 13394,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 13394,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 43929,
			"type": "SCALAR"
		},
		{
			"componentType": 5126,
			"count": 4457,
			"max": [
				14.84339714050293,
				19.12285614013672,
				7.658736228942871
			],
			"min": [
				-14.376398086547852,
				1.513162612915039,
				-8.422272682189941
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 4457,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 4457,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 18390,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 93320,
			"byteOffset": 0
		},
		{
			"buffer": 0,
			"byteLength": 34496,
			"byteOffset": 93320
		}
	],
	"samplers": [
		{
			"magFilter": 9729,
			"minFilter": 9987
		}
	],
	"buffers": [
		{
			"byteLength": 127816,
			"uri": building_4_bin
		}
	]
}