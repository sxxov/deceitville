import building_14_bin from './building-14.bin?url';
import roof_color_jpg from './roof_color.jpg?url';
import walls_color_jpg from './walls_color.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_specular",
		"KHR_materials_ior",
		"KHR_materials_emissive_strength"
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
			"name": "Building_14.001",
			"rotation": [
				0.32822003960609436,
				0.6263160705566406,
				-0.32822027802467346,
				0.6263155937194824
			],
			"scale": [
				0.6160156726837158,
				0.6160157322883606,
				0.6160157322883606
			],
			"translation": [
				-2.22658371925354,
				13.164676666259766,
				49.520050048828125
			]
		}
	],
	"materials": [
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
					"index": 0
				},
				"metallicFactor": 0
			}
		},
		{
			"doubleSided": true,
			"emissiveFactor": [
				1,
				1,
				1
			],
			"emissiveTexture": {
				"index": 1
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
					"index": 2
				},
				"metallicFactor": 0,
				"roughnessFactor": 0.968181848526001
			}
		}
	],
	"meshes": [
		{
			"name": "Cube.041",
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
			"source": 1
		},
		{
			"sampler": 0,
			"source": 1
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "roof_color",
			"uri": roof_color_jpg
		},
		{
			"mimeType": "image/jpeg",
			"name": "walls_color",
			"uri": walls_color_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 3470,
			"max": [
				10.242748260498047,
				16.813045501708984,
				8.561389923095703
			],
			"min": [
				-10.059412002563477,
				-7.941824913024902,
				-17.92688751220703
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 3470,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 3470,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 14442,
			"type": "SCALAR"
		},
		{
			"componentType": 5126,
			"count": 9927,
			"max": [
				9.384685516357422,
				15.570815086364746,
				14.149831771850586
			],
			"min": [
				-9.89670467376709,
				-13.908337593078613,
				-16.85239028930664
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 9927,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 9927,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 33033,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 26843,
			"byteOffset": 0
		},
		{
			"buffer": 0,
			"byteLength": 70424,
			"byteOffset": 26844
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
			"byteLength": 97268,
			"uri": building_14_bin
		}
	]
}