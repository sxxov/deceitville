import building_12_bin from './building-12.bin?url';
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
			"name": "Building_12.001",
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
				-23.515914916992188,
				9.649898529052734,
				48.76289749145508
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
			"name": "Cube.039",
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
			"count": 2182,
			"max": [
				10.030229568481445,
				14.897045135498047,
				4.373610496520996
			],
			"min": [
				-9.86240291595459,
				-7.009539604187012,
				-15.650642395019531
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 2182,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 2182,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 10080,
			"type": "SCALAR"
		},
		{
			"componentType": 5126,
			"count": 5420,
			"max": [
				9.311829566955566,
				13.849082946777344,
				12.810675621032715
			],
			"min": [
				-9.56002426147461,
				-11.662052154541016,
				-14.298463821411133
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 5420,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 5420,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 18117,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 17353,
			"byteOffset": 0
		},
		{
			"buffer": 0,
			"byteLength": 39610,
			"byteOffset": 17356
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
			"byteLength": 56968,
			"uri": building_12_bin
		}
	]
}