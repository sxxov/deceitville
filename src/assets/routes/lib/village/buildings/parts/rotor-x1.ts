import rotor_x1_bin from './rotor-x1.bin?url';
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
			"name": "Rotor.002",
			"scale": [
				0.5894461274147034,
				0.5894461274147034,
				0.5894461274147034
			],
			"translation": [
				-23.469440460205078,
				24.11568832397461,
				-53.677581787109375
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
			"name": "Plane.017",
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
			"count": 1000,
			"max": [
				10.804248809814453,
				17.936256408691406,
				12.591046333312988
			],
			"min": [
				-13.158771514892578,
				-17.936269760131836,
				-14.655552864074707
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 1000,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 1000,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 3576,
			"type": "SCALAR"
		},
		{
			"componentType": 5126,
			"count": 80,
			"max": [
				8.505878448486328,
				2.2514584064483643,
				7.699642181396484
			],
			"min": [
				-2.875070333480835,
				-2.251469373703003,
				-2.7875804901123047
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 80,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 80,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 234,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 6513,
			"byteOffset": 0
		},
		{
			"buffer": 0,
			"byteLength": 916,
			"byteOffset": 6516
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
			"byteLength": 7432,
			"uri": rotor_x1_bin
		}
	]
}