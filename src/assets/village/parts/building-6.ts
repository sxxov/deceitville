import building_6_bin from './building-6.bin?url';
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
			"name": "Building_06.001",
			"rotation": [
				0.7059763669967651,
				-0.7079961895942688,
				-0.015789581462740898,
				0.009466288611292839
			],
			"scale": [
				0.5894461274147034,
				0.5894460678100586,
				0.5894461274147034
			],
			"translation": [
				-29.474740982055664,
				17.56781768798828,
				-1.6848406791687012
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
			"name": "Cube.030",
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
			"count": 19481,
			"max": [
				22.25478744506836,
				15.930737495422363,
				16.60879135131836
			],
			"min": [
				-13.463623046875,
				-15.994588851928711,
				-12.025026321411133
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 19481,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 19481,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 65220,
			"type": "SCALAR"
		},
		{
			"componentType": 5126,
			"count": 4928,
			"max": [
				-4.087268829345703,
				16.468250274658203,
				17.323143005371094
			],
			"min": [
				-37.53326416015625,
				-16.651920318603516,
				-12.444255828857422
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 4928,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 4928,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 21750,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 126085,
			"byteOffset": 0
		},
		{
			"buffer": 0,
			"byteLength": 36247,
			"byteOffset": 126088
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
			"byteLength": 162336,
			"uri": building_6_bin
		}
	]
}